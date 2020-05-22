/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '..';

describe('Button Group', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ButtonGroup>children</ButtonGroup>);
    expect(wrapper).toMatchSnapshot();
  });
});
