import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './styles.scss';
import InputField from '../../../shared/inputField';
import Button from '../../../shared/button';
import ButtonGroup from '../../../shared/buttonGroup';
import useSearch from '../../../hooks/useSearch';

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchBy, changeSearchBy, changeSearch } = useSearch();
  const location = useLocation();
  const history = useHistory();

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (searchValue) {
      const { search } = location;
      const params = new URLSearchParams(search.substring(1));
      params.set('search', searchValue);
      history.push({
        pathname: '/search',
        search: params.toString(),
      });
    }

    changeSearch(searchValue);
    setSearchValue('');
  }

  function handleSearchBy(value) {
    const { search } = location;
    const params = new URLSearchParams(search.substring(1));
    params.set('searchBy', value);
    history.push({
      pathname: '/search',
      search: params.toString(),
    });

    changeSearchBy(value);
  }

  return (
    <div className="search-filter">
      <div className="container">
        <h1 className="search-filter__title">Find your movie</h1>
        <form className="search-filter__search" onSubmit={handleSubmit}>
          <InputField placeholder="Search" id="search" name="search" value={searchValue} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
        <div>
          <span className="search-filter__search-by">Search by</span>
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
