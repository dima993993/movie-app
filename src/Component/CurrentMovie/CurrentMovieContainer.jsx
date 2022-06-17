import React from "react";
import { connect } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";
import {
  getCurrentMovie,
  getReviewItems,
  getReviewText,
  useTrailerPopap,
} from "../../Redux/MoviesReducer";
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
          <CurrentMovie {...this.props} />
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
    reviewText: state.MoviesPage.reviewText,
    reviewArray: state.MoviesPage.reviewArray,
    trailerPopap: state.MoviesPage.trailerPopap,
  };
};

let CurrentMovieContainer = connect(mapStateToProps, {
  getCurrentMovie,
  getReviewText,
  getReviewItems,
  useTrailerPopap,
})(CurrentMovieWrapper);
export default CurrentMovieContainer;
