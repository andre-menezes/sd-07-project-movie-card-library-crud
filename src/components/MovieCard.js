import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card" className="card">
        <h2 className="card-title">{title}</h2>
        <img src={imagePath} alt={title} className="card-image" />
        <h3 className="card-subtitle">{storyline}</h3>
        <Link to={`/movies/${id}`} className="card-details">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
