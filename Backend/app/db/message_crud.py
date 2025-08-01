from app.db.mongodb import db
from app.models.message import MessageCreate, MessageInDB
from datetime import datetime

messages_collection = db["messages"]

async def create_message(message: MessageCreate):
    message_data = message.dict()
    message_data["timestamp"] = datetime.utcnow()
    message_data["read"] = False
    result = await messages_collection.insert_one(message_data)
    return str(result.inserted_id)

async def get_messages_between_users(sender: str, receiver: str):
    cursor = messages_collection.find({
        "$or": [
            {"sender": sender, "receiver": receiver},
            {"sender": receiver, "receiver": sender}
        ]
    }).sort("timestamp", 1)
    messages = []
    async for doc in cursor:
        doc["id"] = str(doc["_id"])
        messages.append(MessageInDB(**doc))
    return messages
