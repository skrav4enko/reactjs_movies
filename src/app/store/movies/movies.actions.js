export const LOAD_MOVIES = '[Movies] LOAD_MOVIES';
export const LOAD_MOVIES_SUCCESS = '[Movies] LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_ERROR = '[Movies] LOAD_MOVIES_ERROR';

export const LOAD_MOVIE = '[Movie] LOAD_MOVIE';
export const LOAD_MOVIE_SUCCESS = '[Movie] LOAD_MOVIE_SUCCESS';
export const LOAD_MOVIE_ERROR = '[Movie] LOAD_MOVIE_ERROR';

export const loadMoviesAction = () => ({ type: LOAD_MOVIES });
export const loadMovieAction = (movieId) => ({ type: LOAD_MOVIE, payload: movieId });