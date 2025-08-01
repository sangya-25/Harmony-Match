from fastapi import APIRouter, Body, HTTPException
from app.db.mongodb import db

router = APIRouter()
users_collection = db["users"]

@router.post("/connect_users")
async def connect_users(user_email_1: str = Body(...), user_email_2: str = Body(...)):
    user1 = await users_collection.find_one({"email": user_email_1})
    user2 = await users_collection.find_one({"email": user_email_2})
    if not user1 or not user2:
        raise HTTPException(status_code=404, detail="One or both users not found")

    # Update both users’ connected_users
    await users_collection.update_one(
        {"email": user_email_1},
        {"$addToSet": {"connected_users": user_email_2}}
    )
    await users_collection.update_one(
        {"email": user_email_2},
        {"$addToSet": {"connected_users": user_email_1}}
    )

    return {"message": f"{user_email_1} and {user_email_2} are now connected."}
