import { ListItem, Divider,ListItemText } from "@mui/material";
import './Chats.styles.css';

export const Chat_list = ({ chats }) => {

    // не знаю как тут победить ошибку с unique key prop, 
    // неужели надо создавать уникальные ключи и присваивать их здесь каждому элементу?
    return (chats.map((chat) => 
        <>           
            <ListItem button>
                <ListItemText key={chat.id} primary={chat.name} />
            </ListItem>
            <Divider />
        </>)
    )
}