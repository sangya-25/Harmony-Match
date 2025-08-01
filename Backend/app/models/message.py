from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class MessageCreate(BaseModel):
    sender: EmailStr
    receiver: EmailStr
    content: str

class MessageInDB(BaseModel):
    sender: EmailStr
    receiver: EmailStr
    content: str
    timestamp: datetime = datetime.utcnow()
    read: Optional[bool] = False  # Optional: track if the message was read
