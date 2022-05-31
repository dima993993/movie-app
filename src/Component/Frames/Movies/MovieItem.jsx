import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { testApi } from "./../../../Api/api";
import style from "./MoviesBlock.module.css";

const MovieItem = () => {
  return (
    <NavLink
      to={"/"}
      className={style.items_wrapper}
      onClick={() => testApi.test().then((data) => console.log(data))}>
      <div>
        <div className={style.add_watch_list}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <img
          src='https://m.media-amazon.com/images/I/61ux6FzCdGL._AC_SL1280_.jpg'
          alt='Poster'
        />
      </div>
      <div className={style.raiting_block}>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>9.8</span>
      </div>
      <div className={style.title}>
        <span>Name Film</span>
      </div>
      <div className={style.btn_trailer}>
        <span>Trailer</span>
        <span>
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </div>
    </NavLink>
  );
};
export default MovieItem;
