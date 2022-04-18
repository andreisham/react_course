import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE } from "./actions";

const initialState = {};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            return {...state, [payload.chatId]: [...state[payload.chatId], payload.newMessage]};
        }
        case ADD_CHAT: {
            return {...state, [payload.id]: []};
        }
        case DELETE_CHAT: {
            const oldMessages = {...state};
            delete oldMessages[payload.id];
            return oldMessages;
        }
        default:
            return state;
    }
}