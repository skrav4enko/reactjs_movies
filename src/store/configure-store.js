/* eslint-disable import/prefer-default-export */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = (context, initState = {}) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, initState, bindMiddleware([sagaMiddleware]));
  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);
  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
