import React from 'react';

import './styles.scss';
import Button from '../../../shared/button';
import ButtonGroup from '../../../shared/buttonGroup';

const SortResults = ({ describe, sortBy, handleSort }) => {
  return (
    <div className="sort-results">
      <div className="container">
        <div className="sort-results__count">{describe}</div>
        <div className="sort-results__filter">
          <span className="sort-results__filter-by">Sort by</span>
          <ButtonGroup>
            <Button
              variant={sortBy === 'release_date' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSort('release_date')}
            >
              Release date
            </Button>
            <Button
              variant={sortBy === 'vote_average' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSort('vote_average')}
            >
              Rating
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SortResults;
