import React, { FunctionComponent } from 'react';
import './styles.scss';

const ButtonGroup: FunctionComponent = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

export default ButtonGroup;
