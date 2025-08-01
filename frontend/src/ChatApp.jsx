// ChatApp.jsx
import React, { useState, useEffect, useRef } from 'react';
import './ChatApp.css';


// Get logged-in user info from localStorage (set after login)
const getUserInfo = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || { email: '', name: '' };
  } catch {
    return { email: '', name: '' };
  }
};

const ChatApp = () => {
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  // Track if history is loaded for a user
  const historyLoadedRef = useRef({});
  const [newMessage, setNewMessage] = useState('');
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  const { email: myEmail, name: myName } = getUserInfo();

  // Fetch connected users on mount
  useEffect(() => {
    if (myEmail) {
      fetch(`http://localhost:8000/api/connected_users?email=${myEmail}`)
        .then((res) => res.json())
        .then((data) => setConnectedUsers(data));
    }
  }, [myEmail]);

  // Connect to WebSocket when component mounts
  useEffect(() => {
    if (!myEmail) return;
    ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${myEmail}`);
    ws.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages((prev) => [...prev, msg]);
    };
    ws.current.onclose = () => {
      // Optionally handle reconnect
    };
    return () => {
      ws.current && ws.current.close();
    };
  }, [myEmail]);


  // Load chat history when a contact is selected
  useEffect(() => {
    if (selectedUser && !historyLoadedRef.current[selectedUser.email] && myEmail) {
      fetch(
        `http://localhost:8000/api/messages?user1=${myEmail}&user2=${selectedUser.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // Convert backend messages to frontend format
          const formatted = data.map((msg) => ({
            ...msg,
            sender: msg.sender,
            receiver: msg.receiver,
            content: msg.content,
            timestamp: msg.timestamp,
            sender_name: msg.sender_name || (msg.sender === myEmail ? myName : selectedUser.name),
            profile_svg: msg.profile_svg || '',
          }));
          setMessages((prev) => [...prev, ...formatted]);
          historyLoadedRef.current[selectedUser.email] = true;
        });
    }
  }, [selectedUser, myEmail, myName]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim() || !selectedUser) return;
    const msg = {
      sender: myEmail,
      receiver: selectedUser.email,
      content: newMessage,
    };
    ws.current.send(JSON.stringify(msg));
    setNewMessage('');
  };

  return (
    <div className="chat-app">
      <div className="chat-sidebar">
        <h2>Contacts</h2>
        <ul>
          {connectedUsers.length === 0 && <li>No connected users</li>}
          {connectedUsers
            .filter((user) => user.email !== myEmail)
            .map((user) => (
              <li
                key={user.email}
                className={selectedUser?.email === user.email ? 'active' : ''}
                onClick={() => setSelectedUser(user)}
              >
                {user.name}
              </li>
            ))}
        </ul>
      </div>

      <div className="chat-box">
        {selectedUser ? (
          <>
            <h2>Chatting with {selectedUser.name}</h2>
            <div className="messages">
              {messages
                .filter(
                  (m) =>
                    (m.sender === myEmail && m.receiver === selectedUser.email) ||
                    (m.sender === selectedUser.email && m.receiver === myEmail)
                )
                .map((msg, i) => (
                  <div
                    key={i}
                    className={`message ${msg.sender === myEmail ? 'sender' : 'receiver'}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flexDirection: msg.sender === myEmail ? 'row-reverse' : 'row',
                      justifyContent: msg.sender === myEmail ? 'flex-end' : 'flex-start',
                      background: msg.sender === myEmail ? '#ffe6f0' : '#e6f7ff',
                      borderRadius: 18,
                      margin: '8px 0',
                      padding: 8,
                      maxWidth: '80%',
                      marginLeft: msg.sender === myEmail ? 'auto' : 0,
                      marginRight: msg.sender === myEmail ? 0 : 'auto',
                    }}
                  >
                    {/* SVG Profile Icon */}
                    <span
                      dangerouslySetInnerHTML={{ __html: msg.profile_svg || '' }}
                      style={{ width: 32, height: 32, display: 'inline-block' }}
                    />
                    <div style={{ flex: 1, textAlign: msg.sender === myEmail ? 'right' : 'left' }}>
                      <div style={{ fontWeight: 'bold', fontSize: 13 }}>
                        {msg.sender_name || (msg.sender === myEmail ? myName : selectedUser.name)}
                      </div>
                      <div>{msg.content}</div>
                      <span className="time" style={{ fontSize: 11, color: '#888' }}> {
                        msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ''
                      }</span>
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <div className="chat-placeholder">Select a contact to start chatting 💬</div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
