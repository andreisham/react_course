export const selectMessage = (state) => state.messages;
export const selectMessageByChatId = (chatId) => (state) => state.messages[chatId];