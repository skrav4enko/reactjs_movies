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

    const { handleFilter } = this.props;
    const { value } = this.state;

    handleFilter(value);
    this.resetState();
  };

  resetState() {
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { filterBy, handleFilterBy } = this.props;

    return (
      <div className="search-filter">
        <div className="container">
          <h1 className="search-filter__title">Find your movie</h1>
          <form className="search-filter__search" onSubmit={this.handleSubmit}>
            <InputField placeholder="Search" value={value} onChange={this.handleChange} onKeyUp={this.onKeyUp} />
            <Button type="submit">Search</Button>
          </form>
          <div>
            <span className="search-filter__search-by">Search by</span>
            <ButtonGroup>
              <Button
                variant={filterBy === 'title' ? '' : 'secondary'}
                size="small"
                onClick={() => handleFilterBy('title')}
              >
                Title
              </Button>
              <Button
                variant={filterBy === 'genres' ? '' : 'secondary'}
                size="small"
                onClick={() => handleFilterBy('genres')}
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
  filterBy: string,
  handleFilter: func,
  handleFilterBy: func,
};

SearchFilter.defaultProps = {
  filterBy: 'string',
  handleFilter: 'func',
  handleFilterBy: 'func',
};

export default SearchFilter;
