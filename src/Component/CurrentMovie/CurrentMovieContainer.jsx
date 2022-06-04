import React from "react";
import { connect } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";
import { getCurrentMovie } from "../../Redux/MoviesReducer";
import CurrentMovie from "./CurrentMovie";

class CurrentMovieWrapper extends React.Component {
  componentDidMount() {
    let path = window.location.href.split("/");
    let id = path[path.length - 1];
    this.props.getCurrentMovie(id);
  }
  render() {
    return (
      <>
        {this.props.toggleLoading ? (
          <CurrentMovie {...this.props.currentMovie} />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    currentMovie: state.MoviesPage.currentMovie,
    toggleLoading: state.MoviesPage.toggleLoading,
  };
};

let CurrentMovieContainer = connect(mapStateToProps, { getCurrentMovie })(
  CurrentMovieWrapper
);
export default CurrentMovieContainer;
