import { MovieModel } from "../../models/movie.model";

export enum MOVIES_TYPE {
  LOAD_MOVIES = '[Movies] LOAD_MOVIES',
  LOAD_MOVIES_SUCCESS = '[Movies] LOAD_MOVIES_SUCCESS',
  LOAD_MOVIES_ERROR = '[Movies] LOAD_MOVIES_ERROR',
  RESET_MOVIES_STATE = '[Movies] RESET_MOVIES_STATE'
}

export interface ReduxMoviesBaseAction {
  type: MOVIES_TYPE;
}

export enum MOVIE_TYPE {
  LOAD_MOVIE = '[Movie] LOAD_MOVIE',
  LOAD_MOVIE_SUCCESS = '[Movie] LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_ERROR = '[Movie] LOAD_MOVIE_ERROR',
}

export interface ReduxMovieBaseAction {
  type: MOVIE_TYPE;
}

export interface ReduxGetMoviesAction extends ReduxMoviesBaseAction {
  type: MOVIES_TYPE.LOAD_MOVIES;
}

export interface ReduxSuccessMoviesAction extends ReduxMoviesBaseAction {
  type: MOVIES_TYPE.LOAD_MOVIES_SUCCESS;
  payload: MovieModel[];
}

export interface ReduxErrorMoviesAction extends ReduxMoviesBaseAction {
  type: MOVIES_TYPE.LOAD_MOVIES_ERROR;
  payload: string;
}

export interface ReduxResetMovieAction extends ReduxMoviesBaseAction {
  type: MOVIES_TYPE.RESET_MOVIES_STATE;
}

export type MoviesReducerActions = ReduxGetMoviesAction | ReduxSuccessMoviesAction | ReduxErrorMoviesAction | ReduxResetMovieAction;


export interface ReduxGetMovieAction extends ReduxMovieBaseAction {
  type: MOVIE_TYPE.LOAD_MOVIE;
}

export interface ReduxSuccessMovieAction extends ReduxMovieBaseAction {
  type: MOVIE_TYPE.LOAD_MOVIE_SUCCESS;
  payload: MovieModel;
}

export interface ReduxErrorMovieAction extends ReduxMovieBaseAction {
  type: MOVIE_TYPE.LOAD_MOVIE_ERROR;
  payload: string;
}

export type MovieReducerActions = ReduxGetMovieAction | ReduxSuccessMovieAction | ReduxErrorMovieAction;
