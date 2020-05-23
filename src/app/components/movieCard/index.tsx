/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { MovieModel } from '../../models/movie.model';

interface MovieCardProps {
  movie: MovieModel;
}

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  const errorImgHandler = ({ target }: any) => {
    target.src = 'https://via.placeholder.com/150';
    target.onError = null;
  };

  return (
    <Link
      css={css`
        display: flex;
        flex-direction: column;

        &:link,
        &:visited {
          color: inherit;
          text-decoration: none;
        }
      `}
      to={`/film/${movie.id}`}
    >
      <div
        css={css`
          flex: 1 0 auto;
          min-height: 100px;
        `}
      >
        <img
          css={css`
            display: block;
            height: 100%;
            width: 100%;
          `}
          src={movie.poster_path}
          alt={movie.title}
          onError={errorImgHandler}
        />
      </div>
      <div
        css={css`
          flex: 0 0 auto;
          display: flex;
          align-items: flex-start;
          padding: 25px 0;
        `}
      >
        <div
          css={css`
            flex: 1 0;
            margin-right: 25px;
          `}
        >
          <div
            css={css`
              font-size: 20px;
              margin-bottom: 10px;
            `}
          >
            {movie.title}
          </div>
          <div
            css={css`
              font-size: 12px;
            `}
          >
            {movie.genres.join(', ')}
          </div>
        </div>
        <div
          css={css`
            border-radius: 4px;
            border: 1px solid #555555;
            padding: 5px 15px;
          `}
        >
          {movie.release_date.slice(0, 4)}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
