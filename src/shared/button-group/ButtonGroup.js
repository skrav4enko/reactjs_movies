import React from 'react';
import './ButtonGroup.scss';

function ButtonGroup(props) {
  const { children } = props;

  return <div className="button-group">{children}</div>;
}

export default ButtonGroup;
