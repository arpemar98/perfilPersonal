import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

/* REDUX */
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import darkThemeRedux from './reducers/darkThemeRedux';
import languageRedux from './reducers/languageRedux';

const container = document.getElementById('root');

const root = createRoot(container!);

const store = createStore( combineReducers( { darkThemeRedux, languageRedux } ) );

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();

reportWebVitals();
