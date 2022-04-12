import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Chat_list } from './components/Chats/Chat_list';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { Home } from  './screens/Home/Home';
import { Profile } from  './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { store } from './store';

const initialChats = [
  {
    id: 'chat1',
    name: 'Inbox',
  },
  {
    id: 'chat2',
    name: 'Drafts',
  },
  {
    id: 'chat3',
    name: 'Trash',
  },
  {
    id: 'chat4',
    name: 'Spam',
  },
];

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initMessages);

  const addMessage = (newMsg, id) => {
    setMessages({...messages, [id]: [...messages[id], newMsg] });
  }

  const addChat = (newChat) => {
    setChats(prevChats => [...prevChats, newChat]);
    setMessages(prevMessages => ({...prevMessages, [newChat.id]: [] }));
  }

  const deleteChat = (id) => {
    setChats((prevChats) => prevChats.filter((chat) => chat.id !== id ));
    setMessages((prevMessages) => {
      const newMessages = {...prevMessages};
      delete newMessages[id];
      return newMessages;})
  }
  
  return(
    <Provider store = {store}>
    <ThemeContext.Provider value={{theme: theme, changeTheme: toggleTheme}}>
      <BrowserRouter>
      <ul>
        <li>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/chat' style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>Chat</NavLink>
        </li>
        <li>
          <NavLink to='/profile' style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>Profile</NavLink>
        </li>
      </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat_list chats={chats} addChat={addChat} deleteChat={deleteChat}/>} >
            <Route path=':id' element={<Chat messages={messages} addMessage={addMessage}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>
  )
}

export default App;
