import { connect } from "react-redux";
import Preloader from "../../Common/Preloader/Preloader";
import CurrentMovie from "./CurrentMovie";

const CurrentMovieWrapper = (props) => {
  return (
    <>
      {props.toggleLoading ? (
        <CurrentMovie {...props.currentMovie} />
      ) : (
        <Preloader />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    currentMovie: state.MoviesPage.currentMovie,
    toggleLoading: state.MoviesPage.toggleLoading,
  };
};

let CurrentMovieContainer = connect(mapStateToProps, {})(CurrentMovieWrapper);

export default CurrentMovieContainer;
