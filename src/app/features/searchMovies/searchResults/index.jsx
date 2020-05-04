import React from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';

import './styles.scss';
import MovieCard from '../movieCard';
import movieModel from '../../../models/movie.model';

const SearchResults = ({ movies }) => {
  return (
    <div className="search-results">
      <div className="container">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  movies: arrayOf(movieModel),
};

SearchResults.defaultProps = {
  movies: 'movies',
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};

export default connect(mapStateToProps)(SearchResults);
