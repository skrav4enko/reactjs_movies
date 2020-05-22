/* eslint-disable import/prefer-default-export */
import { SEARCH_VALUE, SEARCH_BY, SORT_BY } from './search.actions';

const initialState = {
  search: '',
  searchBy: 'title',
  sortBy: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return { ...state, search: action.payload };
    case SEARCH_BY:
      return { ...state, searchBy: action.payload };
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
