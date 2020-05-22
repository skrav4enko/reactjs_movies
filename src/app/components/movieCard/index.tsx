import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { MovieModel } from '../../models/movie.model';
import './styles.scss';

interface MovieCardProps {
  movie: MovieModel
}

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  const errorImgHandler = ({ target }: any) => {
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

export default MovieCard;
