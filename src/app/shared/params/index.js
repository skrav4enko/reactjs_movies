import React from 'react';

import './styles.scss';

const Params = ({ value, dimension }) => {
  return (
    <div className="params">
      <span className="params__value">{value}</span>
      <span>{dimension}</span>
    </div>
  );
}

export default Params;
