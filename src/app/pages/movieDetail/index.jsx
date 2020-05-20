import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDesc from '../../components/movieDesc';
import SearchResult from '../../components/searchResults';
import SortResults from '../../components/sortResults';
import useMovies from '../../hooks/useMovies';
import './styles.scss';

const MovieDetail = () => {
  const { getMovie, movies, selectedMovie } = useMovies();
  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <>
      <MovieDesc movie={selectedMovie} />
      <SortResults describe={`Film by ${selectedMovie && selectedMovie.genres[0]} genre`} withSort={false} />
      <SearchResult movies={movies} />
    </>
  );
};

export default MovieDetail;
