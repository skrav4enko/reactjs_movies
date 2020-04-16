import React from 'react';
import './MovieDetail.scss';
import SearchResult from '../search-movie/search-results/SearchResults';
import MovieDesc from './movie-desc/MovieDesc';
import SortResults from '../search-movie/sort-results/SortResults';

function MovieDetail(props) {
  const { movie, movies, sortBy, navigateTo, handleSort } = props;

  return (
    <>
      <MovieDesc movie={movie} />
      <SortResults describe={`Film by ${movie.genres[0]} genre`} sortBy={sortBy} handleSort={handleSort} />
      <SearchResult movies={movies} navigateTo={navigateTo} />
    </>
  );
}

export default MovieDetail;
