import { SearchReducerActions, SEARCH_TYPE } from "./search.types";

export interface ReduxSearchState {
  search: string;
  searchBy: string;
  sortBy: string;
}

const initialState = {
  search: '',
  searchBy: 'title',
  sortBy: '',
};

export const searchReducer = (state: ReduxSearchState = initialState, action: SearchReducerActions) => {
  switch (action.type) {
    case SEARCH_TYPE.SEARCH_VALUE:
      return { ...state, search: action.payload };
    case SEARCH_TYPE.SEARCH_BY:
      return { ...state, searchBy: action.payload };
    case SEARCH_TYPE.SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};
