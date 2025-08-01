from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends
from app.db.mongodb import db
from app.models.message import MessageInDB
from app.utils.email_notifications import send_email_notification
from datetime import datetime
from typing import Dict, List
import json

router = APIRouter()
users_collection = db["users"]
messages_collection = db["messages"]

# In-memory store for active connections: {user_email: websocket}
active_connections: Dict[str, WebSocket] = {}

# Track online users
online_users = set()

def generate_svg_icon(name: str) -> str:
    letter = name[0].upper() if name else "U"
    color = "#" + format(abs(hash(name)) % 0xFFFFFF, '06x')
    svg = f'''<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="{color}"/><text x="50%" y="55%" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial" dy=".3em">{letter}</text></svg>'''
    return svg

@router.websocket("/ws/chat/{user_email}")
async def chat_websocket(websocket: WebSocket, user_email: str):
    await websocket.accept()
    active_connections[user_email] = websocket
    online_users.add(user_email)
    try:
        while True:
            data = await websocket.receive_text()
            msg = json.loads(data)
            sender_email = msg["sender"]
            receiver_email = msg["receiver"]
            content = msg["content"]
            timestamp = datetime.utcnow().isoformat()

            # Get sender info
            sender = await users_collection.find_one({"email": sender_email})
            sender_name = sender.get("name", sender_email.split("@")[0]) if sender else sender_email
            svg_icon = generate_svg_icon(sender_name)

            # Save message to DB
            message_doc = {
                "sender": sender_email,
                "receiver": receiver_email,
                "content": content,
                "timestamp": timestamp,
                "read": False
            }
            await messages_collection.insert_one(message_doc)

            # Prepare message for sending
            message_to_send = {
                "sender": sender_email,
                "sender_name": sender_name,
                "receiver": receiver_email,
                "content": content,
                "timestamp": timestamp,
                "profile_svg": svg_icon
            }

            # Send to receiver if online
            receiver_ws = active_connections.get(receiver_email)
            if receiver_ws:
                await receiver_ws.send_text(json.dumps(message_to_send))
            else:
                # Notify sender that receiver is offline
                subject = "New Message Notification"
                notification_message = f"You have unread messages from {sender_email}."
                send_email_notification(receiver_email, subject, notification_message)

            # Echo back to sender
            await websocket.send_text(json.dumps(message_to_send))
    except WebSocketDisconnect:
        del active_connections[user_email]
        online_users.remove(user_email)
