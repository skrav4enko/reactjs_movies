/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { MovieModel } from '../../models/movie.model';
import MovieCard from '../movieCard';

interface MovieListProps {
  movies: MovieModel[];
}

const MovieList: FunctionComponent<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          padding: 25px 0;
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(3, minmax(250px, 1fr));
        `}
      >
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
