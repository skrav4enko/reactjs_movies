import { all } from 'redux-saga/effects';

import { moviesSaga } from './movies/movies.saga';
import { searchSaga } from './search/search.saga';

function* rootSaga() {
  yield all([...moviesSaga, ...searchSaga]);
}

export default rootSaga;
