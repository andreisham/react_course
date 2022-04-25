import { onValue, push, set } from "firebase/database";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { auth, getMsgsListRefById, getMsgsRefById } from "../../services/firebase";
import { addMessageWithReply } from "../../store/messages/actions";
import { selectMessageByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
    const { id } = useParams();
    // const getMessages = useMemo(() => selectMessageByChatId(id), [id])
    // const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const [messages, setMessages] = useState([]);

    const sendMessage = (newText) => {
      push(getMsgsListRefById(id), {
        author: auth.currentUser.email,
        text: newText,
        id: `msg-${Date.now()}`
      })
      sendRobotMessage();
      // dispatch(addMessageWithReply({
      //   author: AUTHORS.myName,
      //   text: newText,
      //   id: `msg-${Date.now()}`
      // },
      // id
      // ))
    }
    let timeout;
    const sendRobotMessage = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
            push(getMsgsListRefById(id), {
              author: AUTHORS.robot,
              text: 'hi from robot',
              id: `msg-${Date.now()}`
            })
      }, 1500);
    }
    

    useEffect(() => {
      const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
        const val = snapshot.val()
        
        if (!snapshot.val()?.empty) {
          setMessages(null);
        } else {
          console.log(val)
          setMessages(Object.values(val.messageList))
          
        }
      })

      return unsubscribe
    }, [id])

    if (!messages) {
      return <Navigate to='/chat' replace />
    }

    return (
      <div className="App"> 
        <h1 className='dumb'>Extremely dumb chat!</h1>
            <div className='messages_block'>
                <MessageList messages={messages} />
            </div>
            <div className='form_block'>
                <Form onSubmit={sendMessage} />
            </div>
      </div>
    );
  }