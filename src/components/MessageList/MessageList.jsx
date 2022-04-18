import { MessageWithThemeColor } from "../Message/Message_container"

export const MessageList = ({ messages }) => {
   return( messages.map((msg) => <MessageWithThemeColor key={msg.id} author={msg.author} text={msg.text} /> )) }