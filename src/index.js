import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MutipleCustomHooks } from './components/03-examples/MutipleCustomHooks';
import { HooksApp } from './HooksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MutipleCustomHooks />
);

