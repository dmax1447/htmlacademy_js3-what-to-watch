import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withCurrentMovie from '../../hocs/with-current-movie/with-current-movie.js';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this._cardMouseEnterHandler = this._cardMouseEnterHandler.bind(this);
  }

  _cardMouseEnterHandler({id}) {
    this.props.setCurrentMovie(id);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((item) => (
          <MovieCard
            movie={item}
            onMouseEnter={this._cardMouseEnterHandler}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  ).isRequired,
  currentMovie: PropTypes.string,
  setCurrentMovie: PropTypes.func.isRequired,
};

export default withCurrentMovie(MovieList);
export {MovieList};
