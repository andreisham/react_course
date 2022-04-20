import './Chats.styles.css';
import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat, deleteChat } from "../../store/chats/actions";
import { Chat_list } from "./Chat_list";
import { onValue, remove, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../services/firebase';


export const Chat_list_container= () => {
    // const chats = useSelector(selectChats);

    const [chats, setChats] = useState([]);

    const dispatch = useDispatch();
    const handleSubmit = (newChatName) => {
      const newChat = {
        name: newChatName,
        id: `chat-${Date.now()}`
      };
      // dispatch(addChat(newChat));
      set(getChatRefById(newChat.id), newChat)
      set(getMsgsRefById(newChat.id), { empty: true })

    }

    const handleDeleteChat = (id) => {
      // dispatch(deleteChat(id))
      remove(getChatRefById(id))
      set(getMsgsRefById(id), null)
    } 
    
    const { changeTheme } = useContext(ThemeContext);

    useEffect(() => {
      const unsubscribe = onValue(chatsRef, (snapshot) => {
        console.log(snapshot.val())
        setChats(Object.values(snapshot.val() || {}))
      })
      return unsubscribe;
    }, [])

    

    return(
        <div className='chat_list'>
          <Chat_list 
            chats={chats}
            changeTheme={changeTheme}
            handleDeleteChat={handleDeleteChat}  
          />
            <div className='profile_form'>
              <p>Создать новый чат</p> 
              <Form onSubmit={handleSubmit} />
            </div>
            <Outlet />
        </div>
    )
}