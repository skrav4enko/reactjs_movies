import { useDispatch, useSelector } from 'react-redux';
import { changeSortByAction, changeSearchByAction, changeSearchAction } from '../store/search/search.actions';
import { RootState } from '../store/root-reducer';

/** Custom hook for accessing Search state in redux store */
function useSearch() {
  const dispatch = useDispatch();

  return {
    // Selectors
    search: useSelector((state: RootState) => state.search.search),
    searchBy: useSelector((state: RootState) => state.search.searchBy),
    sortBy: useSelector((state: RootState) => state.search.sortBy),

    // Dispatchers
    changeSearch: (value: string) => dispatch(changeSearchAction(value)),
    changeSearchBy: (value: string) => dispatch(changeSearchByAction(value)),
    changeSortBy: (value: string) => dispatch(changeSortByAction(value)),
  };
}

export default useSearch;
