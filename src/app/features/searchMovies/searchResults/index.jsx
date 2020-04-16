import React from 'react';
import { func, arrayOf } from 'prop-types';

import './styles.scss';
import MovieCard from '../movieCard';
import movieModel from '../../../models/movie.model';

const SearchResults = ({ movies, navigateTo }) => {
  return (
    <div className="search-results">
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} navigateTo={navigateTo} />;
        })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  movies: arrayOf(movieModel),
  navigateTo: func,
};

SearchResults.defaultProps = {
  movies: 'movies',
  navigateTo: 'func',
};

export default SearchResults;
