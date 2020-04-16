import React from 'react';
import { object, arrayOf } from 'prop-types';

import './styles.scss';
import SearchFilter from './searchFilter';
import SearchResult from './searchResults';
import NoResults from './noResults';
import SortResults from './sortResults';

const SearchMovies = ({ movies, sortBy, filterBy, navigateTo, handleSort, handleFilterBy, handleFilter }) => {
  return (
    <>
      <SearchFilter filterBy={filterBy} handleFilterBy={handleFilterBy} handleFilter={handleFilter} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} handleSort={handleSort} />
      {movies.length ? <SearchResult movies={movies} navigateTo={navigateTo} /> : <NoResults />}
    </>
  );
};

SearchMovies.propTypes = {
  movies: arrayOf(object),
};

export default SearchMovies;
