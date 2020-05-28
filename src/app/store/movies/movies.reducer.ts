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

export const moviesReducer = (draft: ReduxMoviesState = initialMoviesState, action: MoviesReducerActions) => {
  switch (action.type) {
    case MOVIES_TYPE.LOAD_MOVIES:
      draft.loading = true;
      draft.error = '';

      return draft;
    case MOVIES_TYPE.LOAD_MOVIES_SUCCESS:
      draft.loading = false;
      draft.data = action.payload;

      return draft;
    case MOVIES_TYPE.LOAD_MOVIES_ERROR:
      draft.loading = false;
      draft.error = action.payload;

      return draft;
    case MOVIES_TYPE.RESET_MOVIES_STATE:
      draft.loading = false;
      draft.data = [];

      return draft;
    default:
      return draft;
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

export const movieReducer = (draft: ReduxMovieState = initialMovieState, action: MovieReducerActions) => {
  switch (action.type) {
    case MOVIE_TYPE.LOAD_MOVIE:
      draft.loading = true;
      draft.error = '';

      return draft;
    case MOVIE_TYPE.LOAD_MOVIE_SUCCESS:
      draft.loading = false;
      draft.data = action.payload;

      return draft;
    case MOVIE_TYPE.LOAD_MOVIE_ERROR:
      draft.loading = false;
      draft.error = action.payload;

      return draft;
    default:
      return draft;
  }
};
