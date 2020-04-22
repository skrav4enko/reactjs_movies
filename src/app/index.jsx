import React from 'react';

import './styles.scss';
import Main from './features/main';
import ErrorBoundary from './shared/errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
}

export default App;
