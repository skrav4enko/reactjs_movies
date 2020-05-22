import { SEARCH_TYPE } from "./search.types";

export const changeSearchAction = (value: string) => ({ type: SEARCH_TYPE.SEARCH_VALUE, payload: value });
export const changeSearchByAction = (value: string) => ({ type: SEARCH_TYPE.SEARCH_BY, payload: value });
export const changeSortByAction = (value: string) => ({ type: SEARCH_TYPE.SORT_BY, payload: value });
