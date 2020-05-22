import { call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_MOVIE,
  LOAD_MOVIES,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_ERROR,
  LOAD_MOVIE_SUCCESS,
} from './movies.actions';
import { loadMovieByIdApi, loadMoviesApi } from './movies.api';

export function* loadingMoviesAsync({ payload }) {
  try {
    const data = yield call(loadMoviesApi, payload);

    const movies = [...data];

    yield put({ type: LOAD_MOVIES_SUCCESS, payload: movies });
  } catch (err) {
    yield put({ type: LOAD_MOVIES_ERROR, payload: err.message });
  }
}

export function* watchLoadingMoviesAsync() {
  yield takeEvery(LOAD_MOVIES, loadingMoviesAsync);
}

export function* loadMovieAsync({ payload }) {
  try {
    const data = yield call(loadMovieByIdApi, payload);
    const movie = data;
    yield put({ type: LOAD_MOVIE_SUCCESS, payload: movie });

    const params = {
      filter: movie.genres[0],
    };

    yield loadingMoviesAsync({ payload: params });
  } catch (err) {
    yield put({ type: LOAD_MOVIE_ERROR, payload: err.message });
  }
}

export function* watchLoadMovieAsync() {
  yield takeEvery(LOAD_MOVIE, loadMovieAsync);
}

export const moviesSaga = [watchLoadingMoviesAsync(), watchLoadMovieAsync()];
