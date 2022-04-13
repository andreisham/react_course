export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage,
        chatId,
    }
});