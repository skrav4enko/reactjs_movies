import { NAVIGATE_TO } from './types';

const initialState = {
  filterBy: 'title',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
        selectedMovie: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
