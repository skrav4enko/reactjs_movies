import React, { useEffect } from 'react';

import './styles.scss';
import SearchFilter from './searchFilter';
import SearchResult from './searchResults';
import NoResults from './noResults';
import SortResults from './sortResults';
import useMovies from './useMovies';
import useSearch from './useSearch';

const SearchMovies = () => {
  const { getMovies, movies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <SearchFilter searchBy={searchBy} changeSearchBy={changeSearchBy} changeSearch={changeSearch} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} changeSortBy={changeSortBy} />
      {movies.length ? <SearchResult movies={movies} /> : <NoResults />}
    </>
  );
};

export default SearchMovies;
