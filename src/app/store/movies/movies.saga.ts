import { call, put, takeEvery } from 'redux-saga/effects';
import { loadMovieAction, loadMoviesAction } from './movies.actions';
import { loadMovieByIdApi, loadMoviesApi } from './movies.api';
import { MOVIES_TYPE, MOVIE_TYPE } from './movies.types';

export function* loadingMoviesAsync({ payload }: ReturnType<typeof loadMoviesAction>) {
  try {
    const data = yield call(loadMoviesApi, payload);

    const movies = [...data];

    yield put({ type: MOVIES_TYPE.LOAD_MOVIES_SUCCESS, payload: movies });
  } catch (err) {
    yield put({ type: MOVIES_TYPE.LOAD_MOVIES_ERROR, payload: err.message });
  }
}

export function* watchLoadingMoviesAsync() {
  yield takeEvery(MOVIES_TYPE.LOAD_MOVIES, loadingMoviesAsync);
}

export function* loadMovieAsync({ payload }: ReturnType<typeof loadMovieAction>) {
  try {
    const data = yield call(loadMovieByIdApi, payload);
    const movie = data;
    yield put({ type: MOVIE_TYPE.LOAD_MOVIE_SUCCESS, payload: movie });

    const params = {
      filter: movie.genres[0],
    };

    yield loadMoviesAction({ payload: params });
  } catch (err) {
    yield put({ type: MOVIE_TYPE.LOAD_MOVIE_ERROR, payload: err.message });
  }
}

export function* watchLoadMovieAsync() {
  yield takeEvery(MOVIE_TYPE.LOAD_MOVIE, loadMovieAsync);
}

export const moviesSaga = [watchLoadingMoviesAsync(), watchLoadMovieAsync()];
