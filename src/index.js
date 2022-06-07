import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { HookApp } from './HookApp';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormWithCustomHook />
);

