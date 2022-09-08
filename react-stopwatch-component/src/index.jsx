import React from 'react';
import ReactDOM from 'react-dom/client';
import StopwatchApp from './stopwatch';

function Stopwatch() {
  return <StopwatchApp />;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <Stopwatch />;
root.render(element);
