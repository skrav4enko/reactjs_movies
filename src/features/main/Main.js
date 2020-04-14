import React from 'react';
import './Main.scss';
import Header from '../../core/header/Header';
import Footer from '../../core/footer/Footer';
import SearchMovie from '../search-movie/SearchMovie';
import MovieDetail from '../movie-detail/MovieDetail';

import moviesData from '../../mock/data.json';

const movies = [...moviesData.data];

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
    this.state = { movies, filteredMovies: movies, selectedId: '', filterBy: 'title', selectedMovie: '' };
  }

  handleSearch(value) {
    this.setState({
      searchValue: value,
    });
  }

  handleNavigate(value) {
    this.setState({
      selectedId: value,
      selectedMovie: this.getSelectedMovie(value),
    });
  }

  handleSort(value) {
    this.setState({
      sortBy: value,
      filteredMovies: this.getSortedMovie(value),
    });
  }

  handleFilterBy(value) {
    this.setState({
      filterBy: value,
    });
  }

  handleFilter(value) {
    this.setState({
      filteredMovies: this.getFilteredMovie(value),
    });
  }

  getSelectedMovie(id) {
    return this.state.filteredMovies.find((movie) => movie.id === id);
  }

  getSortedMovie(by) {
    return this.state.filteredMovies.sort(compareFn(by));
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

  render() {
    const { filteredMovies, selectedMovie, sortBy, filterBy } = this.state;

    return (
      <div className="main">
        <Header navigateTo={this.handleNavigate.bind(this)} />
        <main className="content">
          {selectedMovie ? (
            <MovieDetail
              movie={selectedMovie}
              movies={filteredMovies}
              sortBy={sortBy}
              navigateTo={this.handleNavigate.bind(this)}
              handleSort={this.handleSort.bind(this)}
            />
          ) : (
            <SearchMovie
              movies={filteredMovies}
              sortBy={sortBy}
              filterBy={filterBy}
              navigateTo={this.handleNavigate.bind(this)}
              handleSort={this.handleSort.bind(this)}
              handleFilterBy={this.handleFilterBy.bind(this)}
              handleFilter={this.handleFilter.bind(this)}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
