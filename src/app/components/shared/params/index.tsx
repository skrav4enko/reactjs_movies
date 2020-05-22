import React, { FunctionComponent } from 'react';
import './styles.scss';

interface ParamsProps {
  value: string;
  dimension: string;
}

const Params: FunctionComponent<ParamsProps> = ({ value, dimension }) => {
  return (
    <div className="params">
      <span className="params__value">{value}</span>
      <span>{dimension}</span>
    </div>
  );
};

export default Params;
