/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'next/link';

import styles from './styles.module.scss';
import movieModel from '../../models/movie.model';

const MovieCard = ({ movie }) => {
  return (
    <Link className={styles.movieCard} href={`/film/${movie.id}`}>
      <div className={styles.movieCard__poster}>
        <img className={styles.movieCard__img} src={movie.poster_path} alt={movie.title} />
      </div>
      <div className={styles.movieCard__footer}>
        <div className={styles.movieCard__desc}>
          <div className={styles.movieCard__title}>{movie.title}</div>
          <div className={styles.movieCard__genre}>{movie.genres.join(', ')}</div>
        </div>
        <div className={styles.movieCard__date}>{movie.release_date.slice(0, 4)}</div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: movieModel,
};

MovieCard.defaultProps = {
  movie: 'movie',
};

export default MovieCard;
