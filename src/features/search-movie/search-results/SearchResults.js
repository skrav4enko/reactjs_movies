import React from 'react';
import './SearchResults.scss';
import MovieCard from '../../shared/movie-card/MovieCard';
import { object, arrayOf } from 'prop-types';

function SearchResults(props) {
  const { movies, navigateTo } = props;

  return (
    <div className="search-results">
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} navigateTo={navigateTo} />;
        })}
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  movies: arrayOf(object),
};

export default SearchResults;
