import React from 'react';
import Layout from '../../components/layout';
import MovieList from '../../components/movieList';
import NoResults from '../../components/noResults';
import SearchFilter from '../../components/searchFilter';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import useSearch from '../../hooks/useSearch';
import { loadMoviesAction } from '../../store/movies/movies.actions';
import { changeSearchAction, changeSearchByAction, changeSortByAction } from '../../store/search/search.actions';

const SearchMovies = () => {
  const { movies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();

  return (
    <Layout>
      <SearchFilter searchBy={searchBy} changeSearchBy={changeSearchBy} changeSearch={changeSearch} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} changeSortBy={changeSortBy} />
      {movies.length ? <MovieList movies={movies} /> : <NoResults />}
    </Layout>
  );
};

SearchMovies.getInitialProps = async ({ query, store }) => {
  const { search, searchBy, sortBy } = query;

  if (sortBy) {
    store.dispatch(changeSortByAction(sortBy));
  }
  if (searchBy) {
    store.dispatch(changeSearchByAction(searchBy));
  }
  if (search) {
    store.dispatch(changeSearchAction(search));
  }

  await store.dispatch(loadMoviesAction());

  return {
    props: {},
  };
};

export default SearchMovies;
