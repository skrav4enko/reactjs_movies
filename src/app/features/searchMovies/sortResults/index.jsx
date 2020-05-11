import React from 'react';
import { func, string, bool } from 'prop-types';

import './styles.scss';
import Button from '../../../shared/button';
import ButtonGroup from '../../../shared/buttonGroup';

const SortResults = ({ describe, sortBy, changeSortBy, withSort }) => {
  return (
    <div className="sort-results">
      <div className="container">
        <div className="sort-results__count">{describe}</div>
        {withSort ? (
          <div className="sort-results__filter">
            <span className="sort-results__filter-by">Sort by</span>
            <ButtonGroup>
              <Button
                variant={sortBy === 'release_date' ? '' : 'secondary'}
                size="small"
                onClick={() => changeSortBy('release_date')}
              >
                Release date
              </Button>
              <Button
                variant={sortBy === 'vote_average' ? '' : 'secondary'}
                size="small"
                onClick={() => changeSortBy('vote_average')}
              >
                Rating
              </Button>
            </ButtonGroup>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SortResults.propTypes = {
  describe: string,
  withSort: bool,
  sortBy: string,
  changeSortBy: func,
};

SortResults.defaultProps = {
  describe: 'string',
  sortBy: 'string',
  withSort: true,
  changeSortBy: 'func',
};

export default SortResults;
