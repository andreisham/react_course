import { push } from "firebase/database";
import { auth, getMsgsListRefById } from "../../services/firebase";
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
        if (newMessage?.author === auth.currentUser.email) {
          push(getMsgsListRefById(chatId), {
            author: AUTHORS.robot,
            text: 'hi from robot',
            id: `msg-${Date.now()}`
          })
          // dispatch(addMessage({
          //   author: AUTHORS.robot,
          //   text: 'hi from robot',
          //   id: `msg-${Date.now()}`
          // },
          // chatId
          // ))
        }
    }, 1500);
}