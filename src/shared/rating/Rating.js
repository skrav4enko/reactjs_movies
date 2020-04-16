import React from 'react';
import './Rating.scss';

function Rating(props) {
  const { value } = props;

  return <div className="rating">{value}</div>;
}

export default Rating;
