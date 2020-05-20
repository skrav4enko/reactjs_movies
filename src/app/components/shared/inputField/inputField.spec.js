/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import InputField from '.';

describe('InputField', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot();
  });
});

