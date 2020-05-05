/* eslint-disable import/prefer-default-export */
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIE,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_ERROR,
} from './movies.actions';

const initialMoviesState = {
  loading: false,
  data: [],
  error: undefined,
};

export const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, loading: true, error: '' };
    case LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const initialMovieState = {
  loading: false,
  data: null,
  error: undefined,
};

export const movieReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case LOAD_MOVIE:
      return { ...state, loading: true, error: '' };
    case LOAD_MOVIE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOAD_MOVIE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
