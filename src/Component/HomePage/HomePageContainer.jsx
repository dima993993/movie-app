import { connect } from "react-redux";
import {
  closePopap,
  openNavPopap,
  openSearchPopap,
} from "../../Redux/HomePageReducer";
import HomePage from "./HomePage";

const HomePageWrapper = (props) => {
  return <HomePage state={props} />;
};

let mapStateToProps = (state) => {
  return {
    navPopap: state.HomePage.navPopap,
    searchPopap: state.HomePage.searchPopap,
  };
};

let HomePageContainer = connect(mapStateToProps, {
  closePopap,
  openNavPopap,
  openSearchPopap,
})(HomePageWrapper);

export default HomePageContainer;
