import './Message.styles.css';

export const Message = ({ text, name, number, doSmth, bold }) => {
  return (
    <h1 onClick={doSmth} className={"message" + (bold ? " new_message" : "")}>
      message: {text}
      author: {name}
      num: {number}
    </h1>
  );
};