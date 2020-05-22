/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Main from '..';

describe('Layout', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});

