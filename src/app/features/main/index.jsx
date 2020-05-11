import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './styles.scss';
import Header from '../../core/header';
import Footer from '../../core/footer';
import SearchMovies from '../searchMovies';
import MovieDetail from '../movieDetail';
import NotFound from '../notFound';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <main className="content">
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route path="/search" component={SearchMovies} />
          <Route path="/film/:id" component={MovieDetail} />
          <Route exact path="**" component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
