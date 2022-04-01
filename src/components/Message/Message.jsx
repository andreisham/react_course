import PropTypes  from 'prop-types';
import './Message.styles.css';

export const Message = ({ author, text }) => {

  return (
    <div>
      <span>{author}: </span>
      <span>{text}</span>
    </div>    
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string,
}