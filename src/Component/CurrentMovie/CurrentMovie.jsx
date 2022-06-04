import {
  faClockRotateLeft,
  faFaceGrinWide,
  faFilm,
  faGenderless,
  faPlay,
  faPlus,
  faShareNodes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Frames/Header/Header";
import style from "./CurrentMovie.module.css";

const CurrentMovie = (props) => {
  return (
    <div>
      <Header />
      <div className={style.content_wrapper}>
        <div className={style.poster}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={style.content}>
          <div className={style.title}>{props.title}</div>
          <div className={style.items}>
            <span>
              <FontAwesomeIcon icon={faUser} />
              <span>{props.contentRating}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faClockRotateLeft} />
              <span>{props.runtimeStr}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faFaceGrinWide} />
              <span>{props.year}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faGenderless} />
              <span>{props.genres}</span>
            </span>
          </div>
          <div className={style.description}>{props.plot}</div>
          <div className={style.cast}>
            <div>Cast</div>
            <div>{props.stars}</div>
          </div>
          <div className={style.buttons}>
            <div>
              <div className={style.first_btn}></div>
              <div className={style.second_btn}></div>
              <FontAwesomeIcon icon={faPlay} />
              <span>Play</span>
            </div>
            <div>
              <div className={style.first_btn}></div>
              <div className={style.second_btn}></div>
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Watch List</span>
            </div>
            <div>
              <div className={style.first_btn}></div>
              <div className={style.second_btn}></div>
              <FontAwesomeIcon icon={faFilm} />
              <span>Trailer</span>
            </div>
            <div>
              <div className={style.first_btn}></div>
              <div className={style.second_btn}></div>
              <FontAwesomeIcon icon={faShareNodes} />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentMovie;
