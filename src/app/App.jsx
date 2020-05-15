import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import MainLayout from './core/mainLayout';
import ErrorBoundary from './shared/errorBoundary';
import createdStore from './store/configure-store';

const store = createdStore;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
