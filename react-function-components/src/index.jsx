import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{props.name}</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
const element = <CustomButton name='Click Me!'/>;
root.render(element);
