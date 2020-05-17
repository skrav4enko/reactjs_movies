import { all, select, takeEvery } from 'redux-saga/effects';
import { loadingMoviesAsync } from '../movies/movies.saga';
import { SEARCH_VALUE } from './search.actions';
import { getSearchState } from './search.selectors';

export function* startSearchMoviesAsync() {
  const { search, searchBy, sortBy } = yield select(getSearchState);

  if (search) {
    const params = {
      search,
      searchBy,
      sortBy,
    };

    yield loadingMoviesAsync({ payload: params });
  }
}

export function* watchSearchValueAsync() {
  yield takeEvery(SEARCH_VALUE, startSearchMoviesAsync);
}

export const searchSaga = [watchSearchValueAsync()];
