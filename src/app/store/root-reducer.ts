import { combineReducers } from 'redux';
import { movieReducer, moviesReducer } from './movies/movies.reducer';
import { searchReducer } from './search/search.reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;