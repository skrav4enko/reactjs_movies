import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';
import Main from './features/main';
import ErrorBoundary from './shared/errorBoundary';
import configureStore from './store/configure-store';

const store = configureStore();

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
