import React from 'react';
import './Main.scss';
import Header from '../../core/header/Header';
import Footer from '../../core/footer/Footer';
import SearchMovie from '../search-movie/SearchMovie';
import MovieDetail from '../movie-detail/MovieDetail';

import moviesData from '../../mock/data.json';

const movies = [...moviesData.data];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies, selectedId: '', selectedMovie: null };
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

  getSelectedMovie(id) {
    return this.state.movies.find((movie) => movie.id === id);
  }

  render() {
    const { movies, selectedMovie } = this.state;

    return (
      <div className="main">
        <Header navigateTo={this.handleNavigate.bind(this)} />
        <main className="content">
          {selectedMovie ? (
            <MovieDetail movie={selectedMovie} movies={movies} navigateTo={this.handleNavigate.bind(this)} />
          ) : (
            <SearchMovie movies={movies} navigateTo={this.handleNavigate.bind(this)} />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
