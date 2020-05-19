import { useRouter } from 'next/router';
import React, { useState } from 'react';

import useSearch from '../../hooks/useSearch';
import Button from '../shared/button';
import ButtonGroup from '../shared/buttonGroup';
import InputField from '../shared/inputField';
import styles from './styles.module.scss';

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchBy } = useSearch();
  const router = useRouter();
  const { query } = router;

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchValue) {
      const searchQuery = { ...query, search: encodeURI(searchValue.toString()) };
      const params = new URLSearchParams(searchQuery).toString();

      router.push(
        {
          pathname: '/search',
          query: searchQuery,
        },
        `/search?${params}`,
        { getInitialProps: true }
      );
    }

    setSearchValue('');
  }

  function handleSearchBy(value) {
    const searchQuery = { ...query, searchBy: encodeURI(value.toString()) };

    router.push({
      pathname: '/search',
      query: searchQuery,
    });
  }

  return (
    <div className={styles.searchFilter}>
      <div className={styles.container}>
        <h1 className={styles.searchFilter__title}>Find your movie</h1>
        <form className={styles.searchFilter__search} onSubmit={handleSubmit}>
          <InputField placeholder="Search" id="search" name="search" value={searchValue} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
        <div>
          <span className={styles.searchFilter__searchBy}>Search by</span>
          <ButtonGroup>
            <Button
              variant={searchBy === 'title' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSearchBy('title')}
            >
              Title
            </Button>
            <Button
              variant={searchBy === 'genres' ? '' : 'secondary'}
              size="small"
              onClick={() => handleSearchBy('genres')}
            >
              Genre
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
