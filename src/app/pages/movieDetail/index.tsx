import React, { useEffect, FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import MovieDesc from '../../components/movieDesc';
import MovieList from '../../components/movieList';
import NoResults from '../../components/noResults';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import './styles.scss';

const MovieDetail: FunctionComponent = () => {
  const { getMovie, movies, selectedMovie } = useMovies();
  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <Layout>
      <MovieDesc movie={selectedMovie} />
      <SortResults describe={`Film by ${selectedMovie && selectedMovie.genres[0]} genre`} withSort={false} />
      {movies.length ? <MovieList movies={movies} /> : <NoResults />}
    </Layout>
  );
};

export default MovieDetail;
