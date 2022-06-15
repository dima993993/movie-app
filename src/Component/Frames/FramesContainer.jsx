import { connect } from "react-redux";
import {
  getAllMovies,
  getCurrentMovie,
  getSearchText,
  openTrailerPopap,
  searchMoviesTitle,
  usePagination,
  useTrailerPopap,
} from "../../Redux/MoviesReducer";
import Frames from "./Frames";
import React, { PureComponent } from "react";
import Preloader from "../../Common/Preloader/Preloader";

class FramesWrapper extends PureComponent {
  componentDidMount() {
    if (this.props.movies == "") {
      this.props.getAllMovies("films");
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps);
  }

  render() {
    console.log("render");
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
    trailerPopap: state.MoviesPage.trailerPopap,
    comingSoon: state.MoviesPage.comingSoon,
    currentMovie: state.MoviesPage.currentMovie,
    searchText: state.MoviesPage.searchText,
    hashTag: state.MoviesPage.hashTag,
  };
};

let FramesContainer = connect(mapStateToProps, {
  getAllMovies,
  usePagination,
  useTrailerPopap,
  getCurrentMovie,
  openTrailerPopap,
  searchMoviesTitle,
  getSearchText,
})(FramesWrapper);
export default FramesContainer;
