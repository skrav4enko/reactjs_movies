/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';

describe('Header', () => {
  it('should match snapshot', () => {
    const navigateTo = jest.fn();
    const wrapper = shallow(<Header navigateTo={navigateTo} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call navigateTo', () => {
    const navigateTo = jest.fn();
    const component = shallow(<Header navigateTo={navigateTo} />);
    const icon = component.find('.header__icon').simulate('click');
    expect(navigateTo).toHaveBeenCalled();
  });
});

