import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

export function Chat({messages, addMessage}) {
    const { id } = useParams();
    //const [messages, setMessages] = useState(initMessages);
  
    
  
    const sendMessage = (newText) => {
      addMessage({
        author: AUTHORS.myName,
        text: newText,
        id: `msg-${Date.now()}`
      },
      id
      )
    }
  
    const timer = useRef();

    useEffect(() => { 
      timer.current = setTimeout(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.myName) {
          addMessage({
            author: AUTHORS.robot,
            text: 'hi from robot',
            id: `msg-${Date.now()}`
          },
          id
          )
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