import { ListItem, Divider, Button } from "@mui/material";
import './Chats.styles.css';
import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form/Form";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat, deleteChat } from "../../store/chats/actions";


export const Chat_list = () => {
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
          <Button
          onClick={
            changeTheme
          }>
            Поменять тему
          </Button>
            {chats.map((chat) => 
                <React.Fragment key={chat.id}>           
                    <ListItem button>
                        <NavLink to={`/chat/${chat.id}`} key={chat.id} style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>{chat.name}</NavLink>
                        <DeleteForeverIcon className="delete_chat" onClick={() => handleDeleteChat(chat.id)}>Delete</DeleteForeverIcon>
                    </ListItem>
                    <Divider />  
                </React.Fragment>)
            }
            <div className='profile_form'>
              <p>Создать новый чат</p> 
              <Form onSubmit={handleSubmit} />
            </div>
            <Outlet />
        </div>
    )
}