import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import ErrorBoundary from '../components/shared/errorBoundary';
import makeStore from '../store/configure-store';
import SearchMovies from '../pages/searchMovies';
import MovieDetail from '../pages/movieDetail';
import NotFound from '../pages/notFound';

const store = makeStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
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
