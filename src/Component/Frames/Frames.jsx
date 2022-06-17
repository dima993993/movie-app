import style from "./Frames.module.css";
import SearchBar from "./SearchBar/SearchBar";
import BannerMovies from "./BannerMovies/BannerMovies";
import ListMovies from "./Movies/ListMovies";
import PopapForTrailer from "../../Common/PopapForTrailer/PopapForTrailer";
import HeaderContainer from "./Header/HeaderContainer";
import Footer from "../Footer/Footer";

const Frames = (props) => {
  return (
    <div className={style.frames}>
      {props.trailerPopap ? (
        <PopapForTrailer
          useTrailerPopap={props.useTrailerPopap}
          {...props.currentMovie}
        />
      ) : (
        ""
      )}
      <HeaderContainer />
      <BannerMovies />

      <div className={style.frames_content}>
        <SearchBar
          comingSoon={props.comingSoon}
          getCurrentMovie={props.getCurrentMovie}
          getSearchText={props.getSearchText}
          searchMoviesTitle={props.searchMoviesTitle}
          searchText={props.searchText}
          hashTag={props.hashTag}
          getAllMovies={props.getAllMovies}
          genres={props.genres}
          activeGenre={props.activeGenre}
        />
        <ListMovies {...props} />
      </div>
      <Footer />
    </div>
  );
};
export default Frames;
