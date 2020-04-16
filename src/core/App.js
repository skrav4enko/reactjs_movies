import React from 'react';
import './App.scss';
import Main from '../features/main/Main';
import ErrorBoundary from '../shared/error-boundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

export default App;
