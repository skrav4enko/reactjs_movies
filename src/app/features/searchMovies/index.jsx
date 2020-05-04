import React from 'react';
import { arrayOf, func, string } from 'prop-types';

import './styles.scss';
import SearchFilter from './searchFilter';
import SearchResult from './searchResults';
import NoResults from './noResults';
import SortResults from './sortResults';
import movieModel from '../../models/movie.model';

const SearchMovies = ({ movies, sortBy, filterBy, handleSort, handleFilterBy, handleFilter }) => {
  return (
    <>
      <SearchFilter filterBy={filterBy} handleFilterBy={handleFilterBy} handleFilter={handleFilter} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} handleSort={handleSort} />
      {movies.length ? <SearchResult /> : <NoResults />}
    </>
  );
};

SearchMovies.propTypes = {
  movies: arrayOf(movieModel),
  sortBy: string,
  filterBy: string,
  handleSort: func,
  handleFilterBy: func,
  handleFilter: func,
};

SearchMovies.defaultProps = {
  movies: 'movies',
  sortBy: 'string',
  filterBy: 'string',
  handleSort: 'func',
  handleFilterBy: 'func',
  handleFilter: 'func',
};

export default SearchMovies;
