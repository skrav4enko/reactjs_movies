import React from 'react';
import { element, string, func } from 'prop-types';

import './styles.scss';

const Button = ({ children, type = 'button', variant, size, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`button ${variant} ${size}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: element,
  type: string,
  variant: string,
  size: string,
  onClick: func,
};

Button.defaultProps = {
  children: 'element',
  type: 'string',
  variant: 'string',
  size: 'string',
  onClick: 'func',
};

export default Button;
