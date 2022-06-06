import { connect } from "react-redux";
import { getAllMovies } from "../../../Redux/MoviesReducer";
import Header from "./Header";

const HeaderWrapper = (props) => {
  return <Header {...props} />;
};
let mapStateToProps = (state) => {
  return {
    movies: state.MoviesPage.movies,
  };
};
let HeaderContainer = connect(mapStateToProps, { getAllMovies })(HeaderWrapper);
export default HeaderContainer;
