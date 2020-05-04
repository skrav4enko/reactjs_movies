import { takeEvery, all, select } from 'redux-saga/effects';

import { SEARCH_VALUE, SEARCH_BY, SORT_BY } from './search.actions';
import { getSearchState } from './search.selectors';

export function* startSearchMoviesAsync() {
  const { search } = yield select(getSearchState);

  if (search) {
    // TODO
  }
}

export function* watchSearchValueAsync() {
  yield takeEvery(SEARCH_VALUE, startSearchMoviesAsync);
}

export function* watchSearchSearchByAsync() {
  yield takeEvery(SEARCH_BY, startSearchMoviesAsync);
}

export function* watchSearchSortByAsync() {
  yield takeEvery(SORT_BY, startSearchMoviesAsync);
}

export function* searchSaga() {
  yield all([watchSearchValueAsync(), watchSearchSearchByAsync(), watchSearchSortByAsync()]);
}
