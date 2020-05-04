import { LOAD_MOVIES, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from './movies.actions';

const initialState = {
  loading: false,
  data: [],
  error: undefined,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, loading: true, error: '' };
    case LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, data: [...action.payload] };
    case LOAD_MOVIES_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default moviesReducer;
