import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoviesAction, selectMovieAction } from '../../store/movies/movies.actions';

/** Custom hook for accessing Movies state in redux store */
function useMovies() {
  const dispatch = useDispatch();

  return {
    // Selectors
    movies: useSelector((state) => state.movies.data),
    selectedMovie: useSelector((state) => state.selectedMovie),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    getMovies: useCallback(() => dispatch(loadMoviesAction()), [dispatch]), // called within a useEffect()
    selectMovie: (movie) => dispatch(selectMovieAction(movie)),
  };
}

export default useMovies;
