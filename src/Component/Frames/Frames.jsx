import Header from "./Header/Header";
import style from "./Frames.module.css";
import BannerMovies from "./Movies/BannerMovies";
import ListMovies from "./Movies/ListMovies";
import SearchBar from "./Movies/SearchBar";

const Frames = () => {
  return (
    <div className={style.frames}>
      <Header />
      <BannerMovies />
      <div className={style.frames_content}>
        <SearchBar />
        <ListMovies />
      </div>
    </div>
  );
};
export default Frames;
