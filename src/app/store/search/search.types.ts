export enum SEARCH_TYPE {
  SEARCH_VALUE = '[Search] SEARCH_VALUE',
  SEARCH_BY = '[Search] SEARCH_BY',
  SORT_BY = '[Search] SORT_BY'
}

export interface ReduxSearchBaseAction {
  type: SEARCH_TYPE;
}

export interface ReduxSetSearchAction extends ReduxSearchBaseAction {
  type: SEARCH_TYPE.SEARCH_VALUE;
  payload: string;
}

export interface ReduxSetSearchByAction extends ReduxSearchBaseAction {
  type: SEARCH_TYPE.SEARCH_BY;
  payload: string;
}

export interface ReduxSetSortByAction extends ReduxSearchBaseAction {
  type: SEARCH_TYPE.SORT_BY;
  payload: string;
}

export type SearchReducerActions = ReduxSetSearchAction | ReduxSetSearchByAction | ReduxSetSortByAction;
