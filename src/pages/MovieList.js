import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const fetchMovies = await movieAPI.getMovies();
    this.setState({ movies: fetchMovies, loading: false });
  }

  movieCards(movies) {
    return (
      <div data-testid="movie-list">
        <p>This is Movie List</p>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      loading ? <Loading /> : this.movieCards(movies)
    );
  }
}

export default MovieList;
