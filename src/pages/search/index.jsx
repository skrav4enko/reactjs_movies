import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchFilter from '../../components/searchFilter';
import SearchResult from '../../components/searchResults';
import NoResults from '../../components/noResults';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import useSearch from '../../hooks/useSearch';
import Layout from '../../components/layout';

const SearchMovies = () => {
  const { movies, resetMovies, getMovies } = useMovies();
  const { searchBy, sortBy, changeSearchBy, changeSortBy, changeSearch } = useSearch();
  const router = useRouter();

  // const location = useLocation();

  // function getSearchValue() {
  //   const { search } = location;
  //   const params = new URLSearchParams(search.substring(1));
  //   const searchParam = params.get('search');
  //   const searchByParam = params.get('searchBy');
  //   const sortByParam = params.get('sortBy');

  //   if (sortByParam) {
  //     changeSortBy(sortByParam);
  //   }
  //   if (searchByParam) {
  //     changeSearchBy(searchByParam);
  //   }
  //   if (searchParam) {
  //     changeSearch(searchParam);
  //   } else {
  //     resetMovies();
  //   }
  // }

  return (
    <Layout>
      <SearchFilter searchBy={searchBy} changeSearchBy={changeSearchBy} changeSearch={changeSearch} />
      <SortResults describe={`${movies.length} movies found`} sortBy={sortBy} changeSortBy={changeSortBy} />
      {movies.length ? <SearchResult movies={movies} /> : <NoResults />}
    </Layout>
  );
};

// export async function getStaticProps({ isServer, store }) {
//   return {
//     props: {},
//   };
// }

export default SearchMovies;
