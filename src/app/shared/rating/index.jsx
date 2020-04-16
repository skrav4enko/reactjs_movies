import React from 'react';
import { string } from 'prop-types';

import './styles.scss';

const Rating = ({ value }) => {
  return <div className="rating">{value}</div>;
};

Rating.propTypes = {
  value: string,
};

Rating.defaultProps = {
  value: 'string',
};

export default Rating;
