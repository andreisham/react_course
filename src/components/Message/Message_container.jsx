
import PropTypes  from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import './Message.styles.css';
import { Message } from './Message';

export const Message_container = ({ author, text, theme }) => {

  return (
    <Message 
        author={author}
        text={text}
        theme={theme}
    />  
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
}

const withThemeContext = (Component) => (props) => {
  const {theme} = useContext(ThemeContext);

  return <Component {...props} theme={theme} />
}

export const MessageWithThemeColor = withThemeContext(Message_container)