import React, { useState } from 'react';  // do NOT forget to import useState
import './App.css';

import openSocket from 'socket.io-client';

function App() {
  const [newMessage, setMessage] = useState('')
  const [allMessages, setAllMessages] = useState([])
  var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

  const socket = openSocket('http://localhost:8080',connectionOptions);
  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
});
  socket.on('chat', (data) => {
    setAllMessages([...allMessages, data])
  })

  const sendMessage = () => {
    socket.emit('chat', newMessage);
    setMessage('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Chat Messages</h2>
          <div>
            {
              allMessages.map(message => {
                return <div>{message}</div>
              })
            }
          </div>
          <input onChange={(e) => setMessage(e.target.value)} placeholder="type your message .." />
          <button onClick={() => sendMessage()}>send</button>
        </div>
      </header>
    </div>
  );
}

export default App;