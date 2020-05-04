import { put, takeEvery, call, all } from 'redux-saga/effects';

import { loadMoviesApi } from './movies.api';
import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR, LOAD_MOVIES } from './movies.actions';

export function* loadingMoviesAsync() {
  try {
    const data = yield call(loadMoviesApi);

    const movies = [...data];

    yield put({ type: LOAD_MOVIES_SUCCESS, payload: movies });
  } catch (err) {
    yield put({ type: LOAD_MOVIES_ERROR, payload: err.message });
  }
}

export function* watchLoadingMoviesAsync() {
  yield takeEvery(LOAD_MOVIES, loadingMoviesAsync);
}

export function* moviesSaga() {
  yield all([watchLoadingMoviesAsync()]);
}
