/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Main from '.';

describe('Main', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handke sort value', () => {
    const testSortBy = 'vote_average';
    const wrapper = shallow(<Main />);
    const instance = wrapper.instance();
    instance.setState({
      movies: [{
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
      }]
    });
    instance.handleSort(testSortBy)

    expect(wrapper.state().sortBy).toBe(testSortBy);
  });

  it('should filter by value', () => {
    const testFilter = 'Croft';
    const wrapper = shallow(<Main />);
    const instance = wrapper.instance();
    instance.setState({
      movies: [{
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
      }, {
        id: 338971,
        title: 'Lara Croft',
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
      }]
    });
    instance.handleFilter(testFilter)

    expect(wrapper.state().filteredMovies).toHaveLength(1);
  });

  it('should filter empty by value', () => {
    const testFilter = '';
    const wrapper = shallow(<Main />);
    const instance = wrapper.instance();
    instance.setState({
      movies: [{
        id: 338970,
        title: 'Tomb Raider',
      }, {
        id: 338971,
        title: 'Lara Croft'
      }]
    });
    instance.handleFilter(testFilter)

    expect(wrapper.state().filteredMovies).toHaveLength(2);
  });


  it('should navigate by value', () => {
    const testId = 338970;
    const wrapper = shallow(<Main />);
    const instance = wrapper.instance();
    instance.setState({
      movies: [{
        id: 338970,
        title: 'Tomb Raider',
      }, {
        id: 338971,
        title: 'Lara Croft'
      }]
    });
    instance.handleNavigate(testId)

    expect(wrapper.state().selectedMovie.title).toBe('Tomb Raider');
  });
});

