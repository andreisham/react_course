import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { addMessageWithReply } from "../../store/messages/actions";
import { selectMessageByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
    const { id } = useParams();
    const getMessages = useMemo(() => selectMessageByChatId(id), [id])
    const messages = useSelector(getMessages);
    const dispatch = useDispatch();

    const sendMessage = (newText) => {
      dispatch(addMessageWithReply({
        author: AUTHORS.myName,
        text: newText,
        id: `msg-${Date.now()}`
      },
      id
      ))
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