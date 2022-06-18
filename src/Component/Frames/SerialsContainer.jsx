import { connect } from "react-redux";
import {
  activeGenre,
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

class SerialsWrapper extends PureComponent {
  componentDidMount() {
    this.props.getAllMovies("serials");
    this.props.usePagination(1);
    this.props.activeGenre(false);
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
    trailerPopap: state.MoviesPage.trailerPopap,
    comingSoon: state.MoviesPage.comingSoon,
    currentMovie: state.MoviesPage.currentMovie,
    searchText: state.MoviesPage.searchText,
    hashTag: state.MoviesPage.hashTag,
    genres: state.MoviesPage.genres,
    mostPopularMovies: state.MoviesPage.mostPopularMovies,
  };
};

let SerialsContainer = connect(mapStateToProps, {
  getAllMovies,
  usePagination,
  useTrailerPopap,
  getCurrentMovie,
  openTrailerPopap,
  searchMoviesTitle,
  getSearchText,
  activeGenre,
})(SerialsWrapper);
export default SerialsContainer;
