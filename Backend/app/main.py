


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth
from app.api import admin
from app.api import connect
from app.api import chat_ws
from app.api import message_crud

app = FastAPI()
app.include_router(message_crud.router, prefix="/api", tags=["messages"])

from app.api import user_crud
app.include_router(user_crud.router, prefix="/api", tags=["users"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(admin.router, prefix="/api/admin", tags=["admin"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(connect.router, prefix="/api", tags=["connect"])
app.include_router(chat_ws.router, tags=["chat"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Harmony Match FastAPI backend!"}
