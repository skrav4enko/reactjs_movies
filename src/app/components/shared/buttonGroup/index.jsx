import { arrayOf, node } from 'prop-types';
import React from 'react';
import './styles.scss';

const ButtonGroup = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

ButtonGroup.propTypes = {
  children: arrayOf(node),
};

ButtonGroup.defaultProps = {
  children: <></>,
};

export default ButtonGroup;
