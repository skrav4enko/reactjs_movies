import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './styles.scss';
import SearchResult from '../searchMovies/searchResults';
import MovieDesc from './movieDesc';
import SortResults from '../searchMovies/sortResults';
import useMovies from '../../hooks/useMovies';

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
