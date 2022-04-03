import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { AUTHORS } from './utils/constants'; 
import { MessageList } from './components/MessageList/MessageList';
import { Chat_list } from './components/Chats/Chat_list';


const msgs = [];
const chat_list = [
  {
    id: 'chat-1',
    name: 'Inbox',
  },
  {
    id: 'chat-2',
    name: 'Drafts',
  },
  {
    id: 'chat-3',
    name: 'Trash',
  },
  {
    id: 'chat-4',
    name: 'Spam',
  },
]
function App() {
  const [messages, setMessages] = useState(msgs);

  // стейт на случай добавления функционала создания новых чатов
  const [chats, setChats] = useState(chat_list);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  }

  const sendMessage = (newText) => {
    addMessage({
      author: AUTHORS.myName,
      text: newText,
      id: `msg-${Date.now()}`
    })
  }

  const timer = useRef();

  // ответ от робота на сообщения мр. Смита, робот отвечает с задержкой в 1.5 секунды
  useEffect(() => { 
    timer.current = setTimeout(() => {
      if (messages.length > 0 && messages[messages.length - 1].author == AUTHORS.myName) {
        addMessage({
          author: AUTHORS.robot,
          text: 'hi from robot',
          id: `msg-${Date.now()}`
        })
      }
    }, 1500);
    return () => clearTimeout(timer.current);
  }, [messages])

  return (
    <div className="App"> 
      <h1 className='dumb'>Extremely dumb chat!</h1>
      <div className='chat_list'>
        <Chat_list chats={chats}/>
      </div>
      <div className='messages_block'>
        <MessageList messages={messages}/>
      </div>
      <div className='form_block'>
        <Form onSubmit={sendMessage}/>
      </div>
    </div>
  );
}

export default App;
