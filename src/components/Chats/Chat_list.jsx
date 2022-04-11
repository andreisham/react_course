import { ListItem, Divider,ListItemText, Button } from "@mui/material";
import './Chats.styles.css';
import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";


export const Chat_list = () => {

    const chats = [
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
    ]
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
                    </ListItem>
                    <Divider />  
                </React.Fragment>)
            }
            <Outlet />
        </div>
    )
}