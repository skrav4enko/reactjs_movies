import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import searchReducer from './search-reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
