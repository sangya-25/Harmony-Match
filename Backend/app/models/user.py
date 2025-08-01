from typing import List
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    age: int
    password: str
    contact_number: str
    university_location: str

class UserInDB(BaseModel):
    name: str
    email: EmailStr
    age: int
    hashed_password: str
    contact_number: str
    university_location: str
    connected_users: List[EmailStr] = []  # 👈 New field for matched chat connections
