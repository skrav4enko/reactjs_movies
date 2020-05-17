/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import NoResults from '..';

describe('No Results', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NoResults />);
    expect(wrapper).toMatchSnapshot();
  });
});

