
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from "./Landing.jsx";
import Login from './Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectUsers from './ConnectUsers.jsx';
import ChatApp from './ChatApp.jsx';


function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connect_users" element={<ConnectUsers/>} />
          <Route path="/chat_app" element={<ChatApp/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;