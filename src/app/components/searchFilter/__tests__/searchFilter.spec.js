/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchFilter from '..';

describe('SearchFilter', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      filterBy: 'title',
      handleFilter: jest.fn(),
      handleFilterBy: jest.fn(),
    };
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<SearchFilter {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should has input value', () => {
    const newValue = 'new Value';
    const testProps = {
      ...defaultProps,
      filterBy: 'genres',
    };

    const component = mount(<SearchFilter {...testProps} />);
    const input = component.find('input');

    input.simulate('change', {target: { value: newValue}});
    expect(component.state().value).toBe(newValue);
  });

  it('should call submit', () => {
    const testProps = {
      ...defaultProps,
      filterBy: 'genres',
    };

    const wrapper = mount(<SearchFilter {...testProps} />);
    const form = wrapper.find('form');
    const instance = wrapper.instance();

    jest.spyOn(instance, 'resetState');
    form.simulate('submit');

    expect(instance.resetState).toHaveBeenCalled();
  });

  it('should match snapshot 2', () => {
    const testProps = {
      ...defaultProps,
      filterBy: 'genres',
    };

    const wrapper = shallow(<SearchFilter {...testProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFilterBy with genres', () => {
    const component = mount(<SearchFilter {...defaultProps} />);
    const button = component.find('.button.small.secondary').simulate('click');
    expect(defaultProps.handleFilterBy).toHaveBeenCalledWith('genres');
  });

  it('should call handleFilterBy with title', () => {
    const testProps = {
      ...defaultProps,
      filterBy: 'genres',
    };

    const component = mount(<SearchFilter {...testProps} />);
    const button = component.find('.button.small.secondary').simulate('click');
    expect(testProps.handleFilterBy).toHaveBeenCalledWith('title');
  });
});
