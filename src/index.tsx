import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import App from './app/root/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept();
// }