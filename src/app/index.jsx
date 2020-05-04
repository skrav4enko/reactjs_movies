import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import './styles.scss';
import Main from './features/main';
import ErrorBoundary from './shared/errorBoundary';
import configureStore from './store/configure-store';
import { moviesSaga } from './store/movies/movies.saga';
import { searchSaga } from './store/search/search.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);

sagaMiddleware.run(moviesSaga);
sagaMiddleware.run(searchSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
