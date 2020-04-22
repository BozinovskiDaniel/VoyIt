import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {console.log(e)}
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

let store = createStore(
    rootReducer, 
    persistedState, 
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => saveToLocalStorage(store.getState()))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// <PersistGate loading={null} persistor={persistor}>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Add this in node_modules/react-dom/index.js
window.React1 = require('react');

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);