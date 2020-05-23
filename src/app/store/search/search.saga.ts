import { select, takeEvery, put } from 'redux-saga/effects';
import { loadingMoviesAsync } from '../movies/movies.saga';
import { SEARCH_TYPE } from './search.types';
import { getSearchState } from './search.selectors';
import { MOVIES_TYPE } from '../movies/movies.types';

export function* startSearchMoviesAsync() {
  const { search, searchBy, sortBy } = yield select(getSearchState);

  if (search) {
    const params = {
      search,
      searchBy,
      sortBy,
    };

    yield loadingMoviesAsync({ type: MOVIES_TYPE.LOAD_MOVIES, payload: params });
  }
}

export function* watchSearchValueAsync() {
  yield takeEvery(SEARCH_TYPE.SEARCH_VALUE, startSearchMoviesAsync);
}

export const searchSaga = [watchSearchValueAsync()];
