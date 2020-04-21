import React from 'react';

import './styles.scss';
import Header from '../../core/header';
import Footer from '../../core/footer';
import SearchMovies from '../searchMovies';
import MovieDetail from '../movieDetail';
import moviesData from '../../../mock/data.json';

const data = [...moviesData.data];

const compareFn = (by) => (a, b) => {
  if (a[by] > b[by]) {
    return -1;
  }
  if (a[by] < b[by]) {
    return 1;
  }
  return 0;
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: data, filteredMovies: data, filterBy: 'title', selectedMovie: '' };
  }

  getSelectedMovie(id) {
    const { filteredMovies } = this.state;

    return filteredMovies.find((movie) => movie.id === id);
  }

  getSortedMovie(by) {
    const { filteredMovies } = this.state;

    return filteredMovies.sort(compareFn(by));
  }

  getFilteredMovie(searchValue) {
    const { filterBy, movies } = this.state;

    if (!searchValue) {
      return movies;
    }

    return movies.filter((movie) => {
      const nameLowerCase = (Array.isArray(movie[filterBy]) ? movie[filterBy].join('') : movie[filterBy]).toLowerCase();
      const searchValueLoverCase = searchValue.toLowerCase();

      return nameLowerCase.includes(searchValueLoverCase);
    });
  }

  handleNavigate = (value) => {
    this.setState({
      selectedMovie: this.getSelectedMovie(value),
    });
  };

  handleSort = (value) => {
    this.setState({
      sortBy: value,
      filteredMovies: this.getSortedMovie(value),
    });
  };

  handleFilterBy = (value) => {
    this.setState({
      filterBy: value,
    });
  };

  handleFilter = (value) => {
    this.setState({
      filteredMovies: this.getFilteredMovie(value),
    });
  };

  render() {
    const { filteredMovies, selectedMovie, sortBy, filterBy } = this.state;

    return (
      <div className="main">
        <Header navigateTo={this.handleNavigate} />
        <main className="content">
          {selectedMovie ? (
            <MovieDetail
              movie={selectedMovie}
              movies={filteredMovies}
              sortBy={sortBy}
              navigateTo={this.handleNavigate}
              handleSort={this.handleSort}
            />
          ) : (
            <SearchMovies
              movies={filteredMovies}
              sortBy={sortBy}
              filterBy={filterBy}
              navigateTo={this.handleNavigate}
              handleSort={this.handleSort}
              handleFilterBy={this.handleFilterBy}
              handleFilter={this.handleFilter}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;