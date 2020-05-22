import React, { useEffect, FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/layout';
import MovieList from '../../components/movieList';
import NoResults from '../../components/noResults';
import SearchFilter from '../../components/searchFilter';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import useSearch from '../../hooks/useSearch';
import './styles.scss';

const SearchMovies: FunctionComponent = () => {
  const { movies, resetMovies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();
  const location = useLocation();

  function getSearchValue() {
    const { search } = location;
    const params = new URLSearchParams(decodeURI(search.substring(1)));
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
    <Layout>
      <SearchFilter />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} changeSortBy={changeSortBy} withSort />
      {movies.length ? <MovieList movies={movies} /> : <NoResults />}
    </Layout>
  );
};

export default SearchMovies;
