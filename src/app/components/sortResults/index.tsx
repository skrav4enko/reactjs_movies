import React, { FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';
import './styles.scss';

interface SortResultsProps {
  describe: string,
  withSort: boolean,
  sortBy?: string,
  changeSortBy?: (_: string) => any,
}

const SortResults: FunctionComponent<SortResultsProps> = ({ describe, sortBy, changeSortBy, withSort }) => {
  const location = useLocation();
  const history = useHistory();

  function handleSortBy(value: string) {
    const { search } = location;
    const params = new URLSearchParams(decodeURIComponent(search.substring(1)));
    params.set('sortBy', value);
    history.push({
      pathname: '/search',
      search: encodeURIComponent(params.toString()),
    });

    changeSortBy && changeSortBy(value);
  }

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
                onClick={() => handleSortBy('release_date')}
              >
                Release date
              </Button>
              <Button
                variant={sortBy === 'vote_average' ? '' : 'secondary'}
                size="small"
                onClick={() => handleSortBy('vote_average')}
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

export default SortResults;
