import React from 'react';
import './SearchFilter.scss';
import InputField from '../../../shared/input-field/InputField';
import Button from '../../../shared/button/Button';
import ButtonGroup from '../../../shared/button-group/ButtonGroup';

function SearchFilter(props) {
  return (
    <div className="search-filter">
      <div className="container">
        <h1 className="search-filter__title">Find your movie</h1>
        <div className="search-filter__search">
          <InputField placeholder="Search" /> <Button>Search</Button>
        </div>
        <div>
          <span className="search-filter__search-by">Search by</span>
          <ButtonGroup>
            <Button size="small">Title</Button>
            <Button variant="secondary" size="small">
              Genre
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
