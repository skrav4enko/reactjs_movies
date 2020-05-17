/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from '..';

describe('Movie Card', () => {
  let testProps;

  beforeEach(() => {
    testProps ={
      navigateTo: jest.fn(),
      movie: {
        id: 338970,
        title: 'Tomb Raider',
        tagline: 'Her legend begins',
        vote_average: 6.2,
        vote_count: 817,
        release_date: '2018-03-08',
        poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
        overview:
          'Lara Croft, the fiercely independent daughter of a missing adventurer.',
        budget: 94000000,
        revenue: 126025000,
        genres: ['Action', 'Adventure'],
        runtime: 118,
      }
    }
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<MovieCard {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call navigateTo', () => {
    const component = shallow(<MovieCard {...testProps} />);
    const card = component.find('.movie-card').simulate('click');
    expect(testProps.navigateTo).toHaveBeenCalled();
  });
});
