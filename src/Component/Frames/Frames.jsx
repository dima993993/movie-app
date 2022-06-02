import style from "./Frames.module.css";
import SearchBar from "./SearchBar/SearchBar";
import BannerMovies from "./BannerMovies/BannerMovies";
import Header from "./Header/Header";
import ListMovies from "./Movies/ListMovies";

const Frames = (props) => {
  return (
    <div className={style.frames}>
      <Header />
      <BannerMovies />
      <div className={style.frames_content}>
        <SearchBar key={"search movies"} />
        <ListMovies {...props} />
      </div>
    </div>
  );
};
export default Frames;
