import React from 'react';

import './styles.scss';
import SearchResult from '../searchMovies/searchResults';
import MovieDesc from './movieDesc';
import SortResults from '../searchMovies/sortResults';

const MovieDetail = ({ movie, movies, sortBy, navigateTo, handleSort }) => {
  return (
    <>
      <MovieDesc movie={movie} />
      <SortResults describe={`Film by ${movie.genres[0]} genre`} sortBy={sortBy} handleSort={handleSort} />
      <SearchResult movies={movies} navigateTo={navigateTo} />
    </>
  );
}

export default MovieDetail;
