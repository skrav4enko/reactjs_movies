import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { movieReducer, moviesReducer } from './movies/movies.reducer';
import { searchReducer } from './search/search.reducer';

const nextReducer = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ssr: nextReducer,
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
});

export default rootReducer;
