import { MessageWithThemeColor } from "../Message/Message"

export const MessageList = ({ messages }) => {
   return( messages.map((msg) => <MessageWithThemeColor key={msg.id} author={msg.author} text={msg.text} /> )) }