import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

const initMessages = {
    chat1: [],
    chat2: [],
    chat3: [],
    chat4: [],
}

export function Chat() {
    const { id } = useParams();
    const [messages, setMessages] = useState(initMessages);
  
    const addMessage = (newMsg) => {
      setMessages({...messages, [id]: [...messages[id], newMsg] });
    }
  
    const sendMessage = (newText) => {
      addMessage({
        author: AUTHORS.myName,
        text: newText,
        id: `msg-${Date.now()}`
      })
    }
  
    const timer = useRef();
  
    // ответ от робота на сообщения мр. Смита, робот отвечает с задержкой в 1.5 секунды
    useEffect(() => { 
      timer.current = setTimeout(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.myName) {
          addMessage({
            author: AUTHORS.robot,
            text: 'hi from robot',
            id: `msg-${Date.now()}`
          })
        }
      }, 1500);
      return () => clearTimeout(timer.current);
    }, [messages])
  
    if(!messages[id]) {
        return <Navigate to='/chat' replace />
    }
    return (
      <div className="App"> 
        <h1 className='dumb'>Extremely dumb chat!</h1>
            <div className='messages_block'>
                <MessageList messages={messages[id]} />
            </div>
            <div className='form_block'>
                <Form onSubmit={sendMessage} />
            </div>
      </div>
    );
  }