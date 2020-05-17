import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

const Params = ({ value, dimension }) => {
  return (
    <div className={styles.params}>
      <span className={styles.params__value}>{value}</span>
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
