import { MOVIES_TYPE, MOVIE_TYPE } from "./movies.types";

export const loadMoviesAction = (params: any) => ({ type: MOVIES_TYPE.LOAD_MOVIES, payload: params });
export const loadMovieAction = (movieId: number) => ({ type: MOVIE_TYPE.LOAD_MOVIE, payload: movieId });
export const resetMoviesAction = () => ({ type: MOVIES_TYPE.RESET_MOVIES_STATE, payload: [] });




