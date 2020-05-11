import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './styles.scss';
import SearchFilter from './searchFilter';
import SearchResult from './searchResults';
import NoResults from './noResults';
import SortResults from './sortResults';
import useMovies from '../../hooks/useMovies';
import useSearch from '../../hooks/useSearch';

const SearchMovies = () => {
  const { getMovies, movies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();
  const location = useLocation();

  function getSearchValue() {
    const { search } = location;
    const params = new URLSearchParams(search.substring(1));

    return {
      search: params.get('search'),
      searchBy: params.get('searchBy'),
      sortBy: params.get('sortBy'),
    };
  }

  useEffect(() => {
    const params = getSearchValue();
    getMovies(params);
  }, []);

  return (
    <>
      <SearchFilter searchBy={searchBy} changeSearchBy={changeSearchBy} changeSearch={changeSearch} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} changeSortBy={changeSortBy} />
      {movies.length ? <SearchResult movies={movies} /> : <NoResults />}
    </>
  );
};

export default SearchMovies;
