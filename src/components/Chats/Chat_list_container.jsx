import './Chats.styles.css';
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat, deleteChat } from "../../store/chats/actions";
import { Chat_list } from "./Chat_list";


export const Chat_list_container= () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
    const handleSubmit = (newChatName) => {
      const newChat = {
        name: newChatName,
        id: `chat-${Date.now()}`
      };
      dispatch(addChat(newChat));

    }

    const handleDeleteChat = (id) => {
      dispatch(deleteChat(id))
    } 

    const { changeTheme } = useContext(ThemeContext);

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