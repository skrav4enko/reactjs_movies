export const LOAD_MOVIES = '[Movies] LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = '[Movies] LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = '[Movies] LOAD_MOVIES_ERROR';
export const RESET_MOVIES_STATE = '[Movies] RESET_MOVIES_STATE';

export const LOAD_MOVIE = '[Movie] LOAD_MOVIE';
export const LOAD_MOVIE_SUCCESS = '[Movie] LOAD_MOVIE_SUCCESS';
export const LOAD_MOVIE_ERROR = '[Movie] LOAD_MOVIE_ERROR';

export const loadMoviesAction = (params) => ({ type: LOAD_MOVIES, payload: params });
export const loadMovieAction = (movieId) => ({ type: LOAD_MOVIE, payload: movieId });
export const resetMoviesAction = () => ({ type: RESET_MOVIES_STATE, payload: [] });
