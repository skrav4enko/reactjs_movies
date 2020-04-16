import React from 'react';

import './styles.scss';
import Rating from '../../../shared/rating';
import Params from '../../../shared/params';

const MovieDesc = ({ movie }) => {
  return (
    <div className="movie-desc">
      <div className="container">
        <div className="movie-desc__poster">
          <img className="movie-desc__img" src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="movie-desc__content">
          <div className="movie-desc__header">
            <h2 className="movie-desc__title">{movie.title}</h2>
            <Rating value={movie.vote_average} />
          </div>
          <div className="movie-desc__genres">{movie.genres.join(', ')}</div>
          <div className="movie-desc__params">
            <Params value={movie.release_date.slice(0, 4)} dimension="year" />
            <Params value={movie.runtime} dimension="min" />
          </div>
          <p className="movie-desc__overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDesc;
