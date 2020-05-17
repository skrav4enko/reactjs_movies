/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Rating from '..';

describe('Rating', () => {
  it('should match snapshot', () => {
    const component = shallow(<Rating />);
    expect(component).toMatchSnapshot();
  });

  it('should has default value', () => {
    const wrapper = mount(<Rating />);
    expect(wrapper.prop('value')).toEqual('-');
  });

  it('should has value', () => {
    const testValue = '7';
    const wrapper = mount(<Rating value={testValue} />);
    expect(wrapper.prop('value')).toEqual(testValue);
  });
});

