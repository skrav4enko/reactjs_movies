/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import movieModel from '../../models/movie.model';
import './styles.scss';

const MovieCard = ({ movie }) => {
  const errorImgHandler = ({ target }) => {
    target.src = 'https://via.placeholder.com/150';
    target.onError = null;
  };

  return (
    <Link className="movie-card" to={`/film/${movie.id}`}>
      <div className="movie-card__poster">
        <img className="movie-card__img" src={movie.poster_path} alt={movie.title} onError={errorImgHandler} />
      </div>
      <div className="movie-card__footer">
        <div className="movie-card__desc">
          <div className="movie-card__title">{movie.title}</div>
          <div className="movie-card__genre">{movie.genres.join(', ')}</div>
        </div>
        <div className="movie-card__date">{movie.release_date.slice(0, 4)}</div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: movieModel,
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
