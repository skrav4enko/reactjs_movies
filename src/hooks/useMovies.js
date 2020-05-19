import { useDispatch, useSelector } from 'react-redux';
import { loadMovieAction, loadMoviesAction, resetMoviesAction } from '../store/movies/movies.actions';

/** Custom hook for accessing Movies state in redux store */
function useMovies() {
  const dispatch = useDispatch();

  return {
    // Selectors
    movies: useSelector((state) => state.movies.data),
    selectedMovie: useSelector((state) => state.movie.data),

    // Dispatchers
    // Wrap any dispatcher that could be called within a useEffect() in a useCallback()
    getMovies: (params) => dispatch(loadMoviesAction(params)),
    getMovie: (id) => dispatch(loadMovieAction(id)),
    resetMovies: () => dispatch(resetMoviesAction()),
  };
}

export default useMovies;
