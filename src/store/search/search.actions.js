export const SEARCH_VALUE = '[Search] SEARCH_VALUE';
export const SEARCH_BY = '[Search] SEARCH_BY';
export const SORT_BY = '[Search] SORT_BY';

export const changeSearchAction = (value) => ({ type: SEARCH_VALUE, payload: value });
export const changeSearchByAction = (value) => ({ type: SEARCH_BY, payload: value });
export const changeSortByAction = (value) => ({ type: SORT_BY, payload: value });
