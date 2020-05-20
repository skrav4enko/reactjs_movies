import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import MovieDetail from '../../pages/movieDetail';
import NotFound from '../../pages/notFound';
import SearchMovies from '../../pages/searchMovies';
import Footer from '../footer';
import Header from '../header';
import './styles.scss';

const Layout = () => {
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

export default Layout;
