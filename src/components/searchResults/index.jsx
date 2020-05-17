import React from 'react';
import { arrayOf } from 'prop-types';

import styles from './styles.module.scss';
import MovieCard from '../movieCard';
import movieModel from '../../models/movie.model';

const SearchResults = ({ movies }) => {
  return (
    <div className={styles.searchResults}>
      <div className={styles.container}>
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
