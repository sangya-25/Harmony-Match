from fastapi import APIRouter, Query
from app.db.mongodb import db
from typing import List

router = APIRouter()
users_collection = db["users"]

@router.get("/connected_users", response_model=List[dict])
async def get_connected_users(email: str = Query(...)):
    user = await users_collection.find_one({"email": email})
    if not user or "connected_users" not in user:
        return []
    connected_emails = user["connected_users"]
    users = users_collection.find({"email": {"$in": connected_emails}})
    result = []
    async for u in users:
        result.append({"email": u["email"], "name": u.get("name", u["email"])})
    return result
