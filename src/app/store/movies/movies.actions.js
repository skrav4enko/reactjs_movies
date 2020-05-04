export const LOAD_MOVIES = '[Movies] LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = '[Movies] LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = '[Movies] LOAD_MOVIES_ERROR';

export const SELECT_MOVIE = '[Movie] SELECT_MOVIE';

export const loadMoviesAction = () => ({ type: LOAD_MOVIES });
export const selectMovieAction = (movie) => ({ type: SELECT_MOVIE, payload: movie });
