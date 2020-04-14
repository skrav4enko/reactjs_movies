import React from 'react';
import './SortResults.scss';
import Button from '../../../shared/button/Button';
import ButtonGroup from '../../../shared/button-group/ButtonGroup';

function SortResults(props) {
  const { describe } = props;
  return (
    <div className="sort-results">
      <div className="container">
        <div className="sort-results__count">{describe}</div>
        <div className="sort-results__filter">
          <span className="sort-results__filter-by">Sort by</span>
          <ButtonGroup>
            <Button size="small">Release date</Button>
            <Button variant="secondary" size="small">
              Rating
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default SortResults;
