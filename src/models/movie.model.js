import { arrayOf, number, shape, string } from 'prop-types';

const movieModel = shape({
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  genres: arrayOf(string),
  runtime: number,
});

export default movieModel;
