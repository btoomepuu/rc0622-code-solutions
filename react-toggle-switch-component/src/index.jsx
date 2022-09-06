import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

function Toggle() {
  return <ToggleSwitch />;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <Toggle />;
root.render(element);
