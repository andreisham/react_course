
import PropTypes  from 'prop-types';
import { Component, useContext } from 'react';
import { ThemeContext } from '../../utils/ThemeContext';
import './Message.styles.css';

export const Message = ({ author, text, theme }) => {

  return (
    <div>
      <span style={{color: theme === 'dark' ? 'red' : 'blue'}}>{author}: </span>
      <span>{text}</span>
    </div>    
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

export const MessageWithThemeColor = withThemeContext(Message)