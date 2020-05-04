import { useDispatch, useSelector } from 'react-redux';
import { changeSortByAction, changeSearchByAction, changeSearchAction } from '../../store/search/search.actions';

/** Custom hook for accessing Search state in redux store */
function useSearch() {
  const dispatch = useDispatch();

  return {
    // Selectors
    search: useSelector((state) => state.search.search),
    searchBy: useSelector((state) => state.search.searchBy),
    sortBy: useSelector((state) => state.search.sortBy),

    // Dispatchers
    changeSearch: (value) => dispatch(changeSearchAction(value)),
    changeSearchBy: (value) => dispatch(changeSearchByAction(value)),
    changeSortBy: (value) => dispatch(changeSortByAction(value)),
  };
}

export default useSearch;
