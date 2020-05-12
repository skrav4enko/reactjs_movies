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
  const { movies, resetMovies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();
  const location = useLocation();

  function getSearchValue() {
    const { search } = location;
    const params = new URLSearchParams(search.substring(1));
    const searchParam = params.get('search');
    const searchByParam = params.get('searchBy');
    const sortByParam = params.get('sortBy');

    if (sortByParam) {
      changeSortBy(sortByParam);
    }
    if (searchByParam) {
      changeSearchBy(searchByParam);
    }
    if (searchParam) {
      changeSearch(searchParam);
    } else {
      resetMovies();
    }
  }

  useEffect(() => {
    getSearchValue();
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
