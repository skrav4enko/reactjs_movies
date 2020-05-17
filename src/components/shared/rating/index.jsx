import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

const Rating = ({ value }) => {
  return <div className={styles.rating}>{value}</div>;
};

Rating.propTypes = {
  value: string,
};

Rating.defaultProps = {
  value: '-',
};

export default Rating;
