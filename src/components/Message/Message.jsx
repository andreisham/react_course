import './Message.styles.css';

import { render } from '@testing-library/react';

export const Message = ({ author, text }) => {

  return (
    <div>
      <span>{author}: </span>
      <span>{text}</span>
    </div>    
  );
};