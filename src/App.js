import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { Home } from  './screens/Home/Home';
import { Profile } from  './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { Chat_list_container } from './components/Chats/Chat_list_container';
import { Articles } from './screens/Articles/Articles';


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
        <li>
          <NavLink to='/articles' style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>Articles</NavLink>
        </li>
      </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat_list_container />} >
            <Route path=':id' element={<Chat />}/>
          </Route>
          <Route path='/articles' element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

  )
}

export default App;
