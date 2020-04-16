import React from 'react';

import './styles.scss';

const MovieCard = ({ movie, navigateTo }) => {
  return (
    <div className="movie-card" onClick={() => navigateTo(movie.id)}>
      <div className="movie-card__poster">
        <img className="movie-card__img" src={movie.poster_path} alt={movie.title} />
      </div>
      <div className="movie-card__footer">
        <div className="movie-card__desc">
          <div className="movie-card__title">{movie.title}</div>
          <div className="movie-card__genre">{movie.genres.join(', ')}</div>
        </div>
        <div className="movie-card__date">{movie.release_date.slice(0, 4)}</div>
      </div>
    </div>
  );
};

export default MovieCard;
