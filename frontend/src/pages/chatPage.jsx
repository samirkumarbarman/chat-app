import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import ChatWindow from '../components/Chatwindow.jsx';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default ChatPage;