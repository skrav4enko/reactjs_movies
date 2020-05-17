import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchResult from '../../components/searchResults';
import MovieDesc from '../../components/movieDesc';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import Layout from '../../components/layout';

const MovieDetail = () => {
  const { getMovie, movies, selectedMovie } = useMovies();
  const router = useRouter();

  // useEffect(() => {
  //   getMovie(id);
  // }, [id]);

  return (
    <Layout>
      <MovieDesc movie={selectedMovie} />
      <SortResults describe={`Film by ${selectedMovie && selectedMovie.genres[0]} genre`} withSort={false} />
      <SearchResult movies={movies} />
    </Layout>
  );
};

export default MovieDetail;
