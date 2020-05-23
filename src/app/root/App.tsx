import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { globalFonts, globalStyles, globalVariables } from '../../styles';
import ErrorBoundary from '../components/shared/errorBoundary';
import MovieDetail from '../pages/movieDetail';
import NotFound from '../pages/notFound';
import SearchMovies from '../pages/searchMovies';
import makeStore from '../store/configure-store';

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Global
            styles={css`
            ${emotionNormalize}
              ${globalVariables}
              ${globalFonts};
              ${globalStyles}
            `}
          />
          <Switch>
            <Redirect exact from="/" to="/search" />
            <Route path="/search" component={SearchMovies} />
            <Route path="/film/:id" component={MovieDetail} />
            <Route exact path="**" component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
