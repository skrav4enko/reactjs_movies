/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Params from '.';

describe('Params', () => {
  let testProps;

  beforeAll(() => {
    testProps ={
      dimension: 'test',
      value: 5,
    }
  });

  it('should match snapshot', () => {
    const component = shallow(<Params {...testProps} />);
    expect(component).toMatchSnapshot();
  });
});

