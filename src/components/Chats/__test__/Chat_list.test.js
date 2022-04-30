import { ThemeContext } from "@emotion/react";
import { Button } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { Chat_list } from "../Chat_list";

describe('Chat_list', () => {
    it('renders passed chat', () => {
        const testChat = [{
            name: 'newChatName',
            id: `chat-${Date.now()}`
          }];
        const handleDeleteChat = () => {} 
        
        const  changeTheme  = () => {}
        // почему то этот тест не хочет работать с компонентом Chat_list, 
        // ругается на ошибки в роутере "uselocation() may be used only in the context of a router component"
        // тест работает при замене рендера <NavLink> на обычный параграф <p>
        render(
            <Chat_list chats={testChat} handleDeleteChat={handleDeleteChat} changeTheme={changeTheme}/>)
        
        const chatName = screen.getByText('newChatName');
        expect(chatName).toBeDefined();
    })
})

describe('Change Theme Button', () => {
    it('calls onClick when button clicked', () => {
        const mockClick = jest.fn();
        render(<Button onClick={mockClick}>test</Button>)

        const button = screen.getByRole('button')
        fireEvent(button, new MouseEvent('click',{
            bubbles: true,
            cancelable: true,
        })
        )
        expect(mockClick).toHaveBeenCalled();
    })
})