/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';

interface SortResultsProps {
  describe: string;
  withSort: boolean;
  sortBy?: string;
  changeSortBy?: (_: string) => any;
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
    <div
      css={css`
        background-color: #555555;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          padding: 25px 0;
          margin: 0 auto;
        `}
      >
        <div
          css={css`
            font-weight: 800;
          `}
        >
          {describe}
        </div>
        {withSort ? (
          <div>
            <span
              css={css`
                text-transform: uppercase;
                margin: 25px;
              `}
            >
              Sort by
            </span>
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
