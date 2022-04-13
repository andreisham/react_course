import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage,
        chatId,
    }
});
let timeout;

export const addMessageWithReply = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId))
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        if (newMessage?.author === AUTHORS.myName) {
          dispatch(addMessage({
            author: AUTHORS.robot,
            text: 'hi from robot',
            id: `msg-${Date.now()}`
          },
          chatId
          ))
        }
    }, 1500);
}