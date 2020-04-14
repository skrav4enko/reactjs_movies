import React from 'react';
import './MovieDetail.scss';
import SearchResult from '../search-movie/search-results/SearchResults';
import MovieDesc from './movie-desc/MovieDesc';
import SortResults from '../search-movie/sort-results/SortResults';

function MovieDetail(props) {
  const { movie, movies } = props;
  return (
    <>
      <MovieDesc movie={movie} />
      <SortResults describe={`Film by ${movie.genres[0]} genre`} />
      <SearchResult movies={movies} />
    </>
  );
}

export default MovieDetail;
