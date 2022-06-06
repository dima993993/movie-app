import { connect } from "react-redux";
import {
  closePopap,
  openNavPopap,
  openSearchPopap,
} from "../../Redux/HomePageReducer";
import { getSearchText, searchMoviesTitle } from "../../Redux/MoviesReducer";
import HomePage from "./HomePage";

const HomePageWrapper = (props) => {
  return <HomePage {...props} />;
};

let mapStateToProps = (state) => {
  return {
    navPopap: state.HomePage.navPopap,
    searchPopap: state.HomePage.searchPopap,
    searchText: state.MoviesPage.searchText,
  };
};

let HomePageContainer = connect(mapStateToProps, {
  closePopap,
  openNavPopap,
  openSearchPopap,
  searchMoviesTitle,
  getSearchText,
})(HomePageWrapper);

export default HomePageContainer;
