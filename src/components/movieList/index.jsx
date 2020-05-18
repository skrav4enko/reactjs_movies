import React from 'react';
import { arrayOf } from 'prop-types';

import styles from './styles.module.scss';
import MovieCard from '../movieCard';
import movieModel from '../../models/movie.model';

const MovieList = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      <div className={styles.container}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: arrayOf(movieModel),
};

MovieList.defaultProps = {
  movies: 'movies',
};

export default MovieList;
