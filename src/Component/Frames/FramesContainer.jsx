import { connect } from "react-redux";
import {
  getAllMovies,
  getCurrentMovie,
  openTrailerPopap,
  usePagination,
  useTrailerPopap,
} from "../../Redux/MoviesReducer";
import Frames from "./Frames";
import React, { PureComponent, useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";

class FramesWrapper extends PureComponent {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    return (
      <>
        {!this.props.toggleLoading ? <Preloader /> : <Frames {...this.props} />}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.MoviesPage.movies,
    itemInPage: state.MoviesPage.itemsInPage,
    toggleLoading: state.MoviesPage.toggleLoading,
    countItemsInPage: state.MoviesPage.countItemsInPage,
    currentPage: state.MoviesPage.currentPage,
    countPage: state.MoviesPage.countPage,
    activePage: state.MoviesPage.activePage,
    trailerPopap: state.MoviesPage.trailerPopap,
    comingSoon: state.MoviesPage.comingSoon,
    currentMovie: state.MoviesPage.currentMovie,
  };
};

let FramesContainer = connect(mapStateToProps, {
  getAllMovies,
  usePagination,
  useTrailerPopap,
  getCurrentMovie,
  openTrailerPopap,
})(FramesWrapper);
export default FramesContainer;
