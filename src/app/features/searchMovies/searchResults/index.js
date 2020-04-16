import React from 'react';
import { object, arrayOf } from 'prop-types';

import './styles.scss';
import MovieCard from '../movieCard';

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
  movies: arrayOf(object),
};

export default SearchResults;
