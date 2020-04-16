import React from 'react';
import './Params.scss';

function Params(props) {
  const { value, dimension } = props;

  return (
    <div className="params">
      <span className="params__value">{value}</span>
      <span>{dimension}</span>
    </div>
  );
}

export default Params;
