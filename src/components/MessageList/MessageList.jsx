import { Message } from "../Message/Message"

export const MessageList = ({ messages }) => {
   return( messages.map((msg) => <Message key={msg.id} author={msg.author} text={msg.text} /> )) }