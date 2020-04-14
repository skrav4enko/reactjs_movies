import React from 'react';
import './SearchMovie.scss';
import { object, arrayOf } from 'prop-types';

import SearchFilter from '../search-movie/search-filter/SearchFilter';
import SearchResult from '../search-movie/search-results/SearchResults';
import NoResults from './no-results/NoResults';
import SortResults from './sort-results/SortResults';

function SearchMovie(props) {
  const { movies, navigateTo } = props;

  return (
    <>
      <SearchFilter />
      <SortResults describe={`${movies.length} movies found`} />
      {movies.length ? <SearchResult movies={movies} navigateTo={navigateTo} /> : <NoResults />}
    </>
  );
}

SearchMovie.propTypes = {
  movies: arrayOf(object),
};

export default SearchMovie;
