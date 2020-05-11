/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from './root-reducer';

// Redux dev tools
let devTools = (f) => f;

if (process.browser && process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = (sagaMiddleware) => createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), devTools));

export default configureStore;
