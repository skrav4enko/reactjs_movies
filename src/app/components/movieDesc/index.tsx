/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import moviesSketchLarge from '../../../assets/images/movies_scatch_large.jpg';
import { MovieModel } from '../../models/movie.model';
import Params from '../shared/params';
import Rating from '../shared/rating';

interface MovieDescProps {
  movie: MovieModel | null;
}

const MovieDesc: FunctionComponent<MovieDescProps> = ({ movie }) => {
  return (
    <div
      css={css`
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.7) 50%,
            rgba(0, 0, 0, 0.9) 100%
          ),
          url(${moviesSketchLarge});
        background-position: center;
        background-repeat: no-repeat;
        min-height: 260px;
        max-height: 520px;
        overflow: hidden;
        padding-top: 70px;
        padding-bottom: 70px;
      `}
    >
      {movie ? (
        <div
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            height: 100%;
            display: flex;
          `}
        >
          <div
            css={css`
              flex: 0 0 auto;
              height: 100%;
              width: 250px;
              margin-right: 50px;
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
            />
          </div>
          <div
            css={css`
              & > :not(:last-child) {
                margin-bottom: 25px;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <h2
                css={css`
                  font-size: 60px;
                  margin: 0 25px 0 0;
                `}
              >
                {movie.title}
              </h2>
              <Rating value={movie.vote_average.toString()} />
            </div>
            <div>{movie.genres.join(', ')}</div>
            <div
              css={css`
                & > :not(:last-child) {
                  margin-right: 25px;
                }
              `}
            >
              <Params value={movie.release_date.slice(0, 4)} dimension="year" />
              <Params value={movie.runtime ? movie.runtime.toString() : '∞'} dimension="min" />
            </div>
            <p
              css={css`
                line-height: 1.5;
              `}
            >
              {movie.overview}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieDesc;
