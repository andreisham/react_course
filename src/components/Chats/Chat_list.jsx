import { ListItem, Divider,ListItemText } from "@mui/material";
import './Chats.styles.css';
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Chat_list = () => {

    const chat_list = [
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

    const [chats, setChats] = useState(chat_list);

    return(
        <div className='chat_list'>
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