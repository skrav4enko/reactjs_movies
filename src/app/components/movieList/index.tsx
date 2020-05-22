import React, { FunctionComponent } from 'react';
import MovieCard from '../movieCard';
import './styles.scss';
import { MovieModel } from '../../models/movie.model';

interface MovieListProps {
  movies: MovieModel[]
}

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => {
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

export default MovieList;
