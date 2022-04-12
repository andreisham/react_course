import { ListItem, Divider,ListItemText, Button } from "@mui/material";
import './Chats.styles.css';
import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form/Form";


export const Chat_list = ({ chats, addChat, deleteChat }) => {

    const handleSubmit = (newChatName) => {
      const newChat = {
        name: newChatName,
        id: `chat-${Date.now()}`
      };
      addChat(newChat);
    }

    const { changeTheme } = useContext(ThemeContext);

    return(
        <div className='chat_list'>
          <Button
          onClick={
            changeTheme
          }>
            Click
          </Button>
            {chats.map((chat) => 
                <React.Fragment key={chat.id}>           
                    <ListItem button>
                        <NavLink to={`/chat/${chat.id}`} key={chat.id} style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>{chat.name}</NavLink>
                        <span onClick={() => deleteChat(chat.id)}>Delete</span>
                    </ListItem>
                    <Divider />  
                </React.Fragment>)
            }
            <Form onSubmit={handleSubmit} />
            <Outlet />
        </div>
    )
}