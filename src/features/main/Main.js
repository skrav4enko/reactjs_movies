import React from 'react';
import './Main.scss';
import Header from '../../core/header/Header';
import Footer from '../../core/footer/Footer';
import SearchMovie from '../search-movie/SearchMovie';
import MovieDetail from '../movie-detail/MovieDetail';

import moviesData from '../../mock/data.json';

const movies = [...moviesData.data];

function Main(props) {
  return (
    <div className="main">
      <Header />
      <main className="content">
        <SearchMovie movies={movies} />
        {/* <MovieDetail movie={movies[0]} movies={movies} /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
