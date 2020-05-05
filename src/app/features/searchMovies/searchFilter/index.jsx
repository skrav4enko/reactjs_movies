import React, { useState } from 'react';

import './styles.scss';
import InputField from '../../../shared/inputField';
import Button from '../../../shared/button';
import ButtonGroup from '../../../shared/buttonGroup';
import useSearch from '../../../hooks/useSearch';

const SearchFilter = () => {
  const [ value, setValue] = useState('');
  const { searchBy, changeSearchBy, changeSearch } = useSearch();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    changeSearch(value);
    setValue('');
  }

  return (
    <div className="search-filter">
      <div className="container">
        <h1 className="search-filter__title">Find your movie</h1>
        <form className="search-filter__search" onSubmit={handleSubmit}>
          <InputField placeholder="Search" id="search" name="search" value={value} onChange={handleChange} />
          <Button type="submit">Search</Button>
        </form>
        <div>
          <span className="search-filter__search-by">Search by</span>
          <ButtonGroup>
            <Button
              variant={searchBy === 'title' ? '' : 'secondary'}
              size="small"
              onClick={() => changeSearchBy('title')}
            >
              Title
            </Button>
            <Button
              variant={searchBy === 'genres' ? '' : 'secondary'}
              size="small"
              onClick={() => changeSearchBy('genres')}
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
