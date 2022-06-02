import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import style from "./MoviesBlock.module.css";

const MovieItem = (props) => {
  let title = () => {
    if (props.title.length > 30) {
      return props.title.slice(0, 30) + "...";
    } else {
      return props.title;
    }
  };
  return (
    <NavLink to={"/"} className={style.items_wrapper}>
      <div>
        <div className={style.add_watch_list}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <img src={props.url} alt='Poster' />
      </div>
      <div className={style.raiting_block}>
        <span>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span>{props.albumId + "." + props.id}</span>
      </div>
      <div className={style.title}>
        <span>{title()}</span>
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
