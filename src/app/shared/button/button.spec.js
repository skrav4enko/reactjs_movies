/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      children: 'Name',
      type: 'button',
      variant: 'primary',
      size: 'small',
      onClick: jest.fn(),
    };
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<Button {...defaultProps}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default type button', () => {
    const testProps = {
      ...defaultProps,
      type: undefined,
    }
    const wrapper = shallow(<Button {...testProps}/>);
    expect(wrapper.prop('type')).toEqual('button');
  });
});
