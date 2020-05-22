import React, { FunctionComponent } from 'react';
import './styles.scss';

interface RatingProps {
  value: string;
}

const Rating: FunctionComponent<RatingProps> = ({ value }) => {
  return <div className="rating">{value}</div>;
};

export default Rating;
