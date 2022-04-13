import './Message.styles.css';

export const Message = ({ author, text, theme }) => {

  return (
    <div>
      <span style={{color: theme === 'dark' ? 'red' : 'blue'}}>{author}: </span>
      <span>{text}</span>
    </div>    
  );
};
