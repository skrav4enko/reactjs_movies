import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './styles.scss';
import Header from '../../core/header';
import Footer from '../../core/footer';
import SearchMovies from '../searchMovies';
import MovieDetail from '../movieDetail';
import NotFound from '../notFound';

class Main extends React.Component {
  getSelectedMovie(id) {
    const { filteredMovies } = this.state;

    return filteredMovies.find((movie) => movie.id === id);
  }

  // getSortedMovie(by) {
  //   const { filteredMovies } = this.state;

  //   return filteredMovies.sort(compareFn(by));
  // }

  // getFilteredMovie(searchValue) {
  //   const { filterBy, movies } = this.state;

  //   if (!searchValue) {
  //     return movies;
  //   }

  //   return movies.filter((movie) => {
  //     const nameLowerCase = (Array.isArray(movie[filterBy]) ? movie[filterBy].join('') : movie[filterBy]).toLowerCase();
  //     const searchValueLoverCase = searchValue.toLowerCase();

  //     return nameLowerCase.includes(searchValueLoverCase);
  //   });
  // }

  // handleNavigate = (value) => {
  //   this.setState({
  //     selectedMovie: this.getSelectedMovie(value),
  //   });
  // };

  // handleSort = (value) => {
  //   this.setState({
  //     sortBy: value,
  //     filteredMovies: this.getSortedMovie(value),
  //   });
  // };

  // handleFilterBy = (value) => {
  //   this.setState({
  //     filterBy: value,
  //   });
  // };

  // handleFilter = (value) => {
  //   this.setState({
  //     filteredMovies: this.getFilteredMovie(value),
  //   });
  // };

  render() {
    return (
      <div className="main">
        <Header />
        <main className="content">
          <Switch>
            <Redirect from="/" exact to="/search" />
            <Route path="/search" component={SearchMovies} />
            <Route path="/film/:id" component={MovieDetail} />
            <Route exact path="**" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
