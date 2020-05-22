import { arrayOf } from 'prop-types';
import React from 'react';
import movieModel from '../../models/movie.model';
import MovieCard from '../movieCard';
import './styles.scss';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      <div className="container">
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
  movies: [],
};

export default MovieList;
