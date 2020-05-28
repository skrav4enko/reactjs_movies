import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoviesAction, loadMovieAction, resetMoviesAction } from '../store/movies/movies.actions';
import { RootState } from '../store/root-reducer';

/** Custom hook for accessing Movies state in redux store */
function useMovies() {
  const dispatch = useDispatch();

  return {
    // Selectors
    movies: useSelector((state: RootState) => state.movies.data),
    selectedMovie: useSelector((state: RootState) => state.movie.data),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    getMovies: useCallback((params) => dispatch(loadMoviesAction(params)), [dispatch]), // called within a useEffect()
    getMovie: useCallback((id) => dispatch(loadMovieAction(id)), [dispatch]), // called within a useEffect()
    resetMovies: useCallback(() => dispatch(resetMoviesAction()), [dispatch]), // called within a useEffect()
  };
}

export default useMovies;
