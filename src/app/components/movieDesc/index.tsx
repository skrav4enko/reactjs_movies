import React, { FunctionComponent } from 'react';
import { MovieModel } from '../../models/movie.model';
import Params from '../shared/params';
import Rating from '../shared/rating';
import './styles.scss';

interface MovieDescProps {
  movie: MovieModel | null
}

const MovieDesc: FunctionComponent<MovieDescProps> = ({ movie }) => {
  return movie ? (
    <div className="movie-desc">
      <div className="container">
        <div className="movie-desc__poster">
          <img className="movie-desc__img" src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="movie-desc__content">
          <div className="movie-desc__header">
            <h2 className="movie-desc__title">{movie.title}</h2>
            <Rating value={movie.vote_average.toString()} />
          </div>
          <div className="movie-desc__genres">{movie.genres.join(', ')}</div>
          <div className="movie-desc__params">
            <Params value={movie.release_date.slice(0, 4)} dimension="year" />
            <Params value={movie.runtime ? movie.runtime.toString() : '∞'} dimension="min" />
          </div>
          <p className="movie-desc__overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default MovieDesc;
