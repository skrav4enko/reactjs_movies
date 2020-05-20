import { arrayOf } from 'prop-types';
import React from 'react';
import movieModel from '../../models/movie.model';
import MovieCard from '../movieCard';
import './styles.scss';

const SearchResults = ({ movies }) => {
  return (
    <div className="search-results">
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  movies: arrayOf(movieModel),
};

SearchResults.defaultProps = {
  movies: 'movies',
};

export default SearchResults;
