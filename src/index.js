import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { HookApp } from './HookApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterWithCustomHook />
);

