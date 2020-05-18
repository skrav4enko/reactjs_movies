import React from 'react';
import { useRouter } from 'next/router';
import { func, string, bool } from 'prop-types';

import styles from './styles.module.scss';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';

const SortResults = ({ describe, sortBy, changeSortBy, withSort }) => {
  const router = useRouter();
  const { query } = router;

  function handleSortBy(value) {
    router.push({
      pathname: '/search',
      query: { ...query, sortBy: encodeURIComponent(value.toString()) },
    });

    // changeSortBy(value);
  }

  return (
    <div className={styles.sortResults}>
      <div className={styles.container}>
        <div className={styles.sortResults__count}>{describe}</div>
        {withSort ? (
          <div className={styles.sortResults__filter}>
            <span className={styles.sortResults__filterBy}>Sort by</span>
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
