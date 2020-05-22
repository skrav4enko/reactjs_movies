import { MovieModel } from '../../models/movie.model';
import { MovieReducerActions, MoviesReducerActions, MOVIES_TYPE, MOVIE_TYPE } from './movies.types';

export interface ReduxMoviesState {
  data: MovieModel[];
  loading: boolean;
  error?: string;
}

const initialMoviesState = {
  loading: false,
  data: [],
  error: '',
};

export const moviesReducer = (state: ReduxMoviesState = initialMoviesState, action: MoviesReducerActions) => {
  switch (action.type) {
    case MOVIES_TYPE.LOAD_MOVIES:
      return { ...state, loading: true, error: '' };
    case MOVIES_TYPE.LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case MOVIES_TYPE.LOAD_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MOVIES_TYPE.RESET_MOVIES_STATE:
      return { ...state, loading: false, data: [] };

    default:
      return state;
  }
};

export interface ReduxMovieState {
  data: MovieModel | null;
  loading: boolean;
  error?: string;
}

const initialMovieState = {
  loading: false,
  data: null,
  error: '',
};

export const movieReducer = (state: ReduxMovieState = initialMovieState, action: MovieReducerActions) => {
  switch (action.type) {
    case MOVIE_TYPE.LOAD_MOVIE:
      return { ...state, loading: true, error: '' };
    case MOVIE_TYPE.LOAD_MOVIE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case MOVIE_TYPE.LOAD_MOVIE_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
