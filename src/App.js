import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './screens/Chat/Chat';
import { Home } from  './screens/Home/Home';
import { Profile } from  './screens/Profile/Profile';
import { ThemeContext } from './utils/ThemeContext';
import { Chat_list_container } from './components/Chats/Chat_list_container';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PriviteRoute/PrivateRoute';
import { Error401 } from './screens/Errors/Error401';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';


function App() {
  const [theme, setTheme] = useState('dark');
  const [authed, setAuthed] = useState(false)

  const handleLogin = () => {
    setAuthed(true)
  }
  const handleLogout = () => {
    setAuthed(false)
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin()
      } else {
        handleLogout()
      }
    });

    return unsubscribe;
  }, []);

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
        <Route path='/' element={<PublicRoute authed={authed}/>} >
          <Route path='' element={<Home onAuth={handleLogin}/>} />
          <Route path='signup' element={<Home onAuth={handleLogin} isSignUp/>} />
        </Route>
          
          
          <Route path='/profile' element={<PrivateRoute authed={authed}/>} >
            <Route path='' element={<Profile onLogout={handleLogout}/>} />
          </Route>

          <Route path='/chat' element={<PrivateRoute authed={authed}/>} >
            <Route path='' element={<Chat_list_container />} >
              <Route path=':id' element={<Chat />}/>
            </Route>
          </Route>

          
          <Route path='/articles' element={<Articles />} />
          <Route path='/401' element={<Error401 />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>

  )
}

export default App;
