import './App.css';
import React, { useState } from 'react';
import { Chat_list } from './components/Chats/Chat_list';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { Home } from  './screens/Home/Home';
import { Profile } from  './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return(
    
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
          <Route path='/chat' element={<Chat_list />} >
            <Route path=':id' element={<Chat />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

  )
}

export default App;
