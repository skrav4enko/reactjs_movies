import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { movieReducer, moviesReducer } from './movies/movies.reducer';
import { searchReducer } from './search/search.reducer';

const combinedReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combinedReducer(state, action);
};

export default rootReducer;
