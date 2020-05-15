/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SearchMovies from '..';

describe('Search Movies', () => {
  let testProps;

  beforeEach(() => {
    testProps = {
      movies: [
        {
          id: 338970,
          title: 'Tomb Raider',
          tagline: 'Her legend begins',
          vote_average: 6.2,
          vote_count: 817,
          release_date: '2018-03-08',
          poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
          overview: 'Lara Croft, the fiercely independent daughter of a missing adventurer.',
          budget: 94000000,
          revenue: 126025000,
          genres: ['Action', 'Adventure'],
          runtime: 118,
        },
      ],
      sortBy: 'title',
      filterBy: 'title',
      navigateTo: jest.fn(),
      handleSort: jest.fn(),
      handleFilterBy: jest.fn(),
      handleFilter: jest.fn(),
    };
  });

  it('should match snapshot with movie', () => {
    const wrapper = shallow(<SearchMovies {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot without movie', () => {
    const overrideProps =  {
      ...testProps,
      movies: []
    }
    const wrapper = shallow(<SearchMovies {...overrideProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
