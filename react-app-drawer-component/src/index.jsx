import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

function Drawer() {
  return <AppDrawer />;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <Drawer />;
root.render(element);
