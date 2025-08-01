import React, { useState } from 'react';

const ConnectUsers = () => {
  const [status, setStatus] = useState('');

  const handleConnect = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/connect_users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_email_1: 'ojha.sangya25@gmail.com',
          user_email_2: 'kunal@mail.com',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ ${data.message}`);
      } else {
        setStatus(`❌ ${data.detail || 'Error connecting users.'}`);
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '1.5rem', fontFamily: 'sans-serif' }}>
      <h2>🔗 Connect Users</h2>
      <p>
        <strong>User 1:</strong> ojha.sangya25@gmail.com
      </p>
      <p>
        <strong>User 2:</strong> kunal@mail.com
      </p>
      <button
        onClick={handleConnect}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Connect Now
      </button>

      {status && (
        <div style={{ marginTop: '1rem', color: status.includes('✅') ? 'green' : 'red' }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default ConnectUsers;
