import style from "./Frames.module.css";
import SearchBar from "./SearchBar/SearchBar";
import BannerMovies from "./BannerMovies/BannerMovies";
import Header from "./Header/Header";

const Frames = (block, props) => {
  return (
    <div className={style.frames}>
      <Header />
      <BannerMovies />
      <div className={style.frames_content}>
        <SearchBar />
        {block}
      </div>
    </div>
  );
};
export default Frames;
