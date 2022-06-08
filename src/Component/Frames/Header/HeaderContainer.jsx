import { connect } from "react-redux";
import { getAllMovies, usePagination } from "../../../Redux/MoviesReducer";
import Header from "./Header";

const HeaderWrapper = (props) => {
  return <Header {...props} />;
};
let mapStateToProps = (state) => {
  return {
    movies: state.MoviesPage.movies,
    currentPage: state.MoviesPage.currentPage,
    currentMovie: state.MoviesPage.currentMovie,
  };
};

let HeaderContainer = connect(mapStateToProps, { getAllMovies, usePagination })(
  HeaderWrapper
);
export default HeaderContainer;
