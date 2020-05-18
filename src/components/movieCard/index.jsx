/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRouter } from 'next/router';
import React from 'react';
import movieModel from '../../models/movie.model';
import styles from './styles.module.scss';

const MovieCard = ({ movie }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/film/${movie.id}`);
  };

  return movie ? (
    <div className={styles.movieCard} onClick={handleClick} role="link" tabIndex="0">
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
    </div>
  ) : null;
};

MovieCard.propTypes = {
  movie: movieModel,
};

MovieCard.defaultProps = {
  movie: 'movie',
};

export default MovieCard;
