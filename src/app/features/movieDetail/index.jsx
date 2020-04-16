import React from 'react';
import { arrayOf, string, func } from 'prop-types';

import './styles.scss';
import SearchResult from '../searchMovies/searchResults';
import MovieDesc from './movieDesc';
import SortResults from '../searchMovies/sortResults';
import movieModel from '../../models/movie.model';

const MovieDetail = ({ movie, movies, sortBy, navigateTo, handleSort }) => {
  return (
    <>
      <MovieDesc movie={movie} />
      <SortResults describe={`Film by ${movie.genres[0]} genre`} sortBy={sortBy} handleSort={handleSort} />
      <SearchResult movies={movies} navigateTo={navigateTo} />
    </>
  );
};

MovieDetail.propTypes = {
  movie: movieModel,
  movies: arrayOf(movieModel),
  sortBy: string,
  navigateTo: func,
  handleSort: func,
};

MovieDetail.defaultProps = {
  movie: 'movie',
  movies: 'movies',
  sortBy: 'sort',
  navigateTo: 'func',
  handleSort: 'func',
};

export default MovieDetail;
