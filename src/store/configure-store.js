/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { moviesSaga } from './movies/movies.saga';
import { searchSaga } from './search/search.saga';

// Redux dev tools
let devTools = (f) => f;

if (process.browser && process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const sagaMiddleware = createSagaMiddleware();

const createdStore = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), devTools));

sagaMiddleware.run(moviesSaga);
sagaMiddleware.run(searchSaga);

export default createdStore;
