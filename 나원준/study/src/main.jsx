import React from 'react'
import ReactDOM from 'react-dom/client'
import App6 from './App6.jsx'
import './index.css'
import store from './store'
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App6 />
  </Provider>
);
