import React from 'react';
import { string } from 'prop-types';

import './styles.scss';

const Params = ({ value, dimension }) => {
  return (
    <div className="params">
      <span className="params__value">{value}</span>
      <span>{dimension}</span>
    </div>
  );
};

Params.propTypes = {
  value: string,
  dimension: string,
};

Params.defaultProps = {
  value: '0',
  dimension: 'string',
};

export default Params;
