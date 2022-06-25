import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import createStore from './store/combineReducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore()}>
    <App />
    </Provider>
  </React.StrictMode >
);

reportWebVitals();