/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from "./store/createStore";
import App from './App';

import './styles/main.scss';

const root = document.getElementById('root');

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create store
const store = createStore(preloadedState);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
