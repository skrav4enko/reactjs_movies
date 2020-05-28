import axios from 'axios';
import { parseList, parseItem } from '../actions-utils';

const BASE_API_URL = 'https://reactjs-cdp.herokuapp.com';

export const loadMoviesApi = async (params: any) => {
  const response = await axios.get(`${BASE_API_URL}/movies`, {
    params,
  });

  return parseList(response, 200);
};

export const loadMovieByIdApi = async (id: number) => {
  const response = await axios.get(`${BASE_API_URL}/movies/${id}`);

  return parseItem(response, 200);
};
