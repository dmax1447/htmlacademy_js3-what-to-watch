import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movieId: `f03`,
    };

    this.onCardTitleClick = this.onCardTitleClick.bind(this);

  }

  onCardTitleClick(id) {
    this.setState({movieId: id});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main
                promo={this.props.promo}
                films={this.props.films}
                onCardTitleClick={this.onCardTitleClick}
              />
            </Route>
            <Route path="/dev-film">
              <MoviePage film={this.props.films.find((item) => item.id === this.state.movieId)} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  ).isRequired,
};
