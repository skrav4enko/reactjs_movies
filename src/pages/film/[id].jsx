import React from 'react';
import Layout from '../../components/layout';
import MovieDesc from '../../components/movieDesc';
import MovieList from '../../components/movieList';
import NoResults from '../../components/noResults';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import { loadMovieAction } from '../../store/movies/movies.actions';

const MovieDetail = () => {
  const { movies, selectedMovie } = useMovies();

  return (
    <Layout>
      <MovieDesc movie={selectedMovie} />
      <SortResults describe={`Film by ${selectedMovie && selectedMovie.genres[0]} genre`} withSort={false} />
      {movies.length ? <MovieList movies={movies} /> : <NoResults />}
    </Layout>
  );
};

MovieDetail.getInitialProps = async ({ query: { id }, store }) => {
  await store.dispatch(loadMovieAction(id));

  return { props: {} };
};

export default MovieDetail;
