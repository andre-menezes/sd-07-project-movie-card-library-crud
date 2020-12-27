import React from 'react';
import PropTypes from 'prop-types';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <label htmlFor="movie_title" className="label">
        <strong>Título</strong>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="input"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="movie_subtitle" className="label">
        <strong>Subtítulo</strong>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
          className="input"
        />
      </label>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <label htmlFor="movie_image" className="label">
        <strong>Imagem</strong>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
          className="input"
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <label htmlFor="movie_storyline" className="label">
        <strong>Sinopse</strong>
        <textarea
          id="movie_storyline"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
          className="textarea"
        />
      </label>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <label htmlFor="movie_genre" className="label">
        <strong>Gênero</strong>
        <select
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
          className="select"
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </select>
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <label htmlFor="movie_rating" className="label">
        <strong>Avaliação</strong>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
          className="input rating"
        />
      </label>
    );
  }

  renderSubmitButton() {
    return (
      <button
        type="button"
        onClick={this.handleSubmit}
        className="button"
      >
        Submit
      </button>
    );
  }

  render() {
    return (
      <section className="background form-background">
        <form className="form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </section>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieForm;
