import { ListItem, Divider, Button } from "@mui/material";
import './Chats.styles.css';
import React from "react";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export const Chat_list = ( {chats, handleDeleteChat, changeTheme} ) => {
    return (
        <>
          <Button
          onClick={
            changeTheme
          }>
            Поменять тему
          </Button>
            {chats.map((chat) => 
                <React.Fragment key={chat.id}>           
                    <ListItem button>
                        {/* <NavLink to={`/chat/${chat.id}`} key={chat.id} style={({ isActive }) => ({ color: isActive ? "green" : "blue"})}>{chat.name}</NavLink> */}
                        <p  key={chat.id} >{chat.name}</p>
                        <DeleteForeverIcon className="delete_chat" onClick={() => handleDeleteChat(chat.id)}>Delete</DeleteForeverIcon>
                    </ListItem>
                    <Divider />  
                </React.Fragment>)
            }
        </>
    )
}