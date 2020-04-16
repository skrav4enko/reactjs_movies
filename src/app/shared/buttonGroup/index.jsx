import React from 'react';
import { element } from 'prop-types';

import './styles.scss';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: element,
};

ButtonGroup.defaultProps = {
  children: 'element',
};

export default ButtonGroup;
