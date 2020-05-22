import { select, takeEvery } from 'redux-saga/effects';
import { loadMoviesAction } from '../movies/movies.actions';
import { SEARCH_TYPE } from './search.types';
import { getSearchState } from './search.selectors';

export function* startSearchMoviesAsync() {
  const { search, searchBy, sortBy } = yield select(getSearchState);

  if (search) {
    const params = {
      search,
      searchBy,
      sortBy,
    };

    yield loadMoviesAction({ payload: params });
  }
}

export function* watchSearchValueAsync() {
  yield takeEvery(SEARCH_TYPE.SEARCH_VALUE, startSearchMoviesAsync);
}

export const searchSaga = [watchSearchValueAsync()];
