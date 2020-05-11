import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import './styles.scss';
import Header from '../header';
import Footer from '../footer';
import SearchMovies from '../../features/searchMovies';
import MovieDetail from '../../features/movieDetail';
import NotFound from '../../features/notFound';

const MainLayout = () => {
  const { key } = useLocation();

  // Scroll to the top of the page when pages change
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [key]);

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

export default MainLayout;
