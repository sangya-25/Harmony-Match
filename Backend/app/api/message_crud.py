from fastapi import APIRouter, Depends, HTTPException, Query
from app.db.mongodb import db
from app.models.message import MessageInDB
from typing import List

router = APIRouter()
messages_collection = db["messages"]

@router.get("/messages", response_model=List[MessageInDB])
async def get_messages_between_users(user1: str = Query(...), user2: str = Query(...)):
    cursor = messages_collection.find({
        "$or": [
            {"sender": user1, "receiver": user2},
            {"sender": user2, "receiver": user1}
        ]
    }).sort("timestamp", 1)
    messages = []
    async for doc in cursor:
        doc["id"] = str(doc["_id"])
        messages.append(MessageInDB(**doc))
    return messages
