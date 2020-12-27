import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };

    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  async fetchMovieList() {
    const { id } = this.props.match.params;
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, loading: false });
  }

  async remove() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id } = this.props.match.params;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details" className="background">
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-image" />
        <div className="movie-details">
          <div className="movie-info">
            <p className="movie-details-data"><strong>Title: </strong>{title}</p>
            <p className="movie-details-data"><strong>Subtitle: </strong>{subtitle}</p>
            <p className="movie-details-data"><strong>Storyline: </strong>{storyline}</p>
            <p className="movie-details-data"><strong>Genre: </strong>{genre}</p>
            <p className="movie-details-data"><strong>Rating: </strong>{rating}</p>
          </div>
          <div className="movie-details-links">
            <Link to={'/'} className="button">VOLTAR</Link>
            <Link to={`/movies/${id}/edit`} className="button">EDITAR</Link>
            <Link to={'/'} onClick={this.remove} className="button">DELETAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default MovieDetails;
