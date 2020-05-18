import React from 'react';

import styles from './styles.module.scss';
import Rating from '../shared/rating';
import Params from '../shared/params';
import movieModel from '../../models/movie.model';

const MovieDesc = ({ movie }) => {
  return (
    <div className={styles.movieDesc}>
      {movie ? (
        <div className={styles.container}>
          <div className={styles.movieDesc__poster}>
            <img className={styles.movieDesc__img} src={movie.poster_path} alt={movie.title} />
          </div>
          <div className={styles.movieDesc__content}>
            <div className={styles.movieDesc__header}>
              <h2 className={styles.movieDesc__title}>{movie.title}</h2>
              <Rating value={movie.vote_average} />
            </div>
            <div className={styles.movieDesc__genres}>{movie.genres.join(', ')}</div>
            <div className={styles.movieDesc__params}>
              <Params value={movie.release_date.slice(0, 4)} dimension="year" />
              <Params value={movie.runtime} dimension="min" />
            </div>
            <p className={styles.movieDesc__overview}>{movie.overview}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

MovieDesc.propTypes = {
  movie: movieModel,
};

MovieDesc.defaultProps = {
  movie: 'movie',
};

export default MovieDesc;
