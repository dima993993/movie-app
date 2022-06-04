import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import style from "./MoviesBlock.module.css";

const MovieItem = (props) => {
  let title = () => {
    if (props.title.length > 20) {
      return props.title.slice(0, 20) + "...";
    } else {
      return props.title;
    }
  };
  return (
    <NavLink
      to={`/movies/${props.id}`}
      className={style.items_wrapper}
      onClick={(e) => {
        props.getCurrentMovie(props.id);
        if (
          e.target.tagName == "SPAN" ||
          e.target.tagName == "BUTTON" ||
          e.target.tagName == "path"
        ) {
          e.preventDefault();
        }
      }}>
      <div className={style.img_wrapper}>
        <div style={{ backgroundImage: `url(${props.image})` }}>
          <button className={style.add_watch_list}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      <div className={style.raiting_block}>
        <div>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>{props.imDbRating}</div>
      </div>
      <div className={style.title}>
        <div>{title()}</div>
      </div>
      <div className={style.btn_trailer_wrapper}>
        <button
          className={style.btn_trailer}
          onClick={() => {
            props.openTrailerPopap(props.id);
          }}>
          <span>Trailer</span>
          <span>
            <FontAwesomeIcon icon={faPlay} />
          </span>
        </button>
      </div>
    </NavLink>
  );
};
export default MovieItem;
