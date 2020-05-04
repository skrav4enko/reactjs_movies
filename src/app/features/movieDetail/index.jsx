import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, func } from 'prop-types';

import './styles.scss';
import SearchResult from '../searchMovies/searchResults';
import MovieDesc from './movieDesc';
import SortResults from '../searchMovies/sortResults';
import movieModel from '../../models/movie.model';

const MovieDetail = ({ movie, movies, sortBy, handleSort }) => {
  return (
    <>
      <MovieDesc movie={movie} />
      <SortResults describe={`Film by ${movie.genres[0]} genre`} sortBy={sortBy} handleSort={handleSort} />
      <SearchResult movies={movies} />
    </>
  );
};

MovieDetail.propTypes = {
  movie: movieModel,
  movies: arrayOf(movieModel),
  sortBy: string,
  handleSort: func,
};

MovieDetail.defaultProps = {
  movie: 'movie',
  movies: 'movies',
  sortBy: 'sort',
  handleSort: 'func',
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    movie: state.movies.movies[0],
  };
};

// const mapPropsToDispatch = (state) => {
//   return {
//     sortBy: state.movies.movies,
//     handleSort: state.movies.movies[0],
//   };
// };

export default connect(mapStateToProps, null)(MovieDetail);
