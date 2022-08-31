import React from 'react';
import * as ReactDOM from 'react-dom/client';

const helloReact = React.createElement('h1', null, 'Hello, React!');
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(helloReact);
console.log(container);
