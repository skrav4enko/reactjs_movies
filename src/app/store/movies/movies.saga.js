import { put, takeEvery, call, all } from 'redux-saga/effects';

import { loadMoviesApi, loadMovieByIdApi } from './movies.api';
import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES,
  LOAD_MOVIE,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_ERROR,
} from './movies.actions';

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

export function* moviesSaga() {
  yield all([watchLoadingMoviesAsync(), watchLoadMovieAsync()]);
}
