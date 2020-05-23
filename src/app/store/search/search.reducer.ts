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

export const searchReducer = (draft: ReduxSearchState = initialState, action: SearchReducerActions) => {
  switch (action.type) {
    case SEARCH_TYPE.SEARCH_VALUE:
      draft.search = action.payload;

      return draft;
    case SEARCH_TYPE.SEARCH_BY:
      draft.searchBy = action.payload;

      return draft;
    case SEARCH_TYPE.SORT_BY:
      draft.sortBy = action.payload;

      return draft;
    default:
      return draft;
  }
};
