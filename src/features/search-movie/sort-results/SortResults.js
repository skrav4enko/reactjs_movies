import React from 'react';
import './SortResults.scss';
import Button from '../../../shared/button/Button';
import ButtonGroup from '../../../shared/button-group/ButtonGroup';

function SortResults(props) {
  const { describe, sortBy, handleSort } = props;

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
}

export default SortResults;
