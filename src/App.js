import './App.css';
import React from 'react';
import { Message } from "./components/Message/Message";

const text = "some text";
const name = "some name";


function App() {
  const foo = () => {
    alert('hello');
  };
  return (
    <div className="App"> 
      <Message text={text} name={name} number={123} doSmth={foo} bold={true} />
      <Message text="new text" name={name} number={123} doSmth={foo} />
    </div>
  );
}

export default App;
