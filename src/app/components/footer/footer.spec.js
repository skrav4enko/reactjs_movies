/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Foo from '.';

describe('Footer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Foo />);
    expect(wrapper).toMatchSnapshot();
  });
});
