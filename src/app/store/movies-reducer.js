import { NAVIGATE_TO } from './types';

import moviesData from '../../mock/data.json';

const initialState = {
  movies: [...moviesData.data],
  mockMovies: [...moviesData.data],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
        selectedMovieId: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
