/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import SortResults from '..';
import Button from '../../../shared/button';

describe('Sort Results', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      describe: 'string',
      sortBy: 'release_date',
      handleSort: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<SortResults {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSort', () => {
    const component = mount(<SortResults {...defaultProps} />);
    const button = component.find('.button.secondary').simulate('click');
    expect(defaultProps.handleSort).toHaveBeenCalledWith('vote_average');
  });

  it('should call handleSort', () => {
    const testProps = {
      ...defaultProps,
      sortBy: 'vote_average'
    };

    const component = mount(<SortResults {...testProps} />);
    const button = component.find('.button.secondary').simulate('click');
    expect(testProps.handleSort).toHaveBeenCalledWith('release_date');
  });
});

