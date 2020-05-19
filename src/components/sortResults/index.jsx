import { useRouter } from 'next/router';
import { bool, string } from 'prop-types';
import React from 'react';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';
import styles from './styles.module.scss';

const SortResults = ({ describe, sortBy, withSort }) => {
  const router = useRouter();
  const { query } = router;

  function handleSortBy(value) {
    const searchQuery = { ...query, sortBy: encodeURI(value.toString()) };

    router.push({
      pathname: '/search',
      query: searchQuery,
    });
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
};

SortResults.defaultProps = {
  describe: 'string',
  sortBy: 'string',
  withSort: true,
};

export default SortResults;
