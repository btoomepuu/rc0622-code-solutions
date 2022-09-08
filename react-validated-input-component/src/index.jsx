import React from 'react';
import ReactDOM from 'react-dom/client';
import ValicateInput from './validated-input';

function Validate() {
  return <ValicateInput />;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <Validate />;
root.render(element);
