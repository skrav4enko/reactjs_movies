import React from 'react';
import { func, string } from 'prop-types';

import './styles.scss';
import InputField from '../../../shared/inputField';
import Button from '../../../shared/button';
import ButtonGroup from '../../../shared/buttonGroup';

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { changeSearch } = this.props;
    const { value } = this.state;

    changeSearch(value);
    this.resetState();
  };

  resetState() {
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { searchBy, changeSearchBy } = this.props;

    return (
      <div className="search-filter">
        <div className="container">
          <h1 className="search-filter__title">Find your movie</h1>
          <form className="search-filter__search" onSubmit={this.handleSubmit}>
            <InputField placeholder="Search" id="search" name="search" value={value} onChange={this.handleChange} />
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
  }
}

SearchFilter.propTypes = {
  searchBy: string,
  changeSearch: func,
  changeSearchBy: func,
};

SearchFilter.defaultProps = {
  searchBy: 'string',
  changeSearch: 'func',
  changeSearchBy: 'func',
};

export default SearchFilter;
