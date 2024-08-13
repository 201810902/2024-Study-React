import React from 'react'
import ReactDOM from 'react-dom/client'
import App5 from './App5.jsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App5 />
  </Provider>
);
