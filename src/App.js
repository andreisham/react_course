import './App.css';
import React, { useState, useEffect } from 'react';
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";


const msgs = [];
const myName = 'mr smith';

function App() {
  const [messages, setMessages] = useState(msgs);

  const addMessage = (newText) => {
    setMessages([...messages, {text: newText, author: myName}]);
  }

  // ответ от робота на сообщения мр. Смита, робот отвечает с задержкой в 1.5 секунды
  useEffect(() => { 
    const timer = setTimeout(() => {
      if (messages.length > 0 && messages[messages.length - 1].author == myName) {
        setMessages([...messages, {text: 'hi from robot', author: "robot"}]);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [messages])

  return (
    <div className="App"> 
      <h1 className='dumb'>Extremely dumb chat!</h1>
      <div className='messages_block'>
        {messages.map((msg) => (
          <Message author={msg.author} text={msg.text} />
        ))}
      </div>
      <div className='form_block'>
        <Form onSubmit={addMessage}/>
      </div>
    </div>
  );
}

export default App;
