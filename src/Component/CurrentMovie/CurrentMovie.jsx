import {
  faClockRotateLeft,
  faFaceGrinWide,
  faFilm,
  faGenderless,
  faPlay,
  faPlus,
  faShareNodes,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import CommonButton from "../../Common/Button/CommonButton/CommonButton";
import HeaderContainer from "../Frames/Header/HeaderContainer";
import style from "./CurrentMovie.module.css";
import Reviews from "./Reviews/Reviews";

const CurrentMovie = (props) => {
  let image = () => {
    if (
      props.currentMovie.posters != null &&
      props.currentMovie.posters.backdrops != ""
    ) {
      return {
        backgroundImage: `url(${props.currentMovie.posters.backdrops[0].link})`,
      };
    } else if (props.currentMovie.image == null) {
      return { backgroundImage: `url(https://i.stack.imgur.com/6M513.png)` };
    } else {
      return { backgroundImage: `url(${props.currentMovie.image})` };
    }
  };
  return (
    <div>
      <HeaderContainer />
      <div className={style.trailer_block} style={image()}>
        <div className={style.wrapper_btn}>
          <span className={style.animation_circle}></span>
          <span className={style.trailer_btn}>
            <span className={style.trailer_btn_icon}>
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </span>
          <div className={style.text_btn}>Play Trailer</div>
        </div>
      </div>
      <div className={style.content_wrapper}>
        <div className={style.poster}>
          <img src={props.currentMovie.image} alt={props.currentMovie.title} />
        </div>
        <div className={style.content}>
          <div className={style.title}>{props.currentMovie.title}</div>
          <div className={style.items}>
            <span>
              <FontAwesomeIcon icon={faStar} />
              <span>{props.currentMovie.imDbRating}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} />
              <span>{props.currentMovie.contentRating}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faClockRotateLeft} />
              <span>{props.currentMovie.runtimeStr}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faFaceGrinWide} />
              <span>{props.currentMovie.year}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faGenderless} />
              <span>{props.currentMovie.genres}</span>
            </span>
          </div>
          <div className={style.description}>{props.currentMovie.plot}</div>
          <div className={style.cast}>
            <div>Cast</div>
            <div>{props.currentMovie.stars}</div>
          </div>
          <div className={style.cast}>
            <div>Director</div>
            <div>{props.currentMovie.directors}</div>
          </div>
          <div className={style.buttons}>
            <CommonButton icon={faPlay} name={"Play"} />
            <CommonButton icon={faPlus} name={"Add Watch List"} />
            <CommonButton icon={faFilm} name={"Trailer"} />
            <CommonButton icon={faShareNodes} name={"Share"} />
          </div>
        </div>
      </div>
      <div className={style.block_reviews}>
        <Reviews {...props} />
      </div>
      <div className={style.block_similars}>
        <div>Similars</div>
        <div className={style.similars_item}>
          {props.currentMovie.similars != null
            ? props.currentMovie.similars.map((el) => {
                return (
                  <NavLink
                    to={`/movies/${el.id}`}
                    className={style.similars}
                    onClick={() => props.getCurrentMovie(el.id)}>
                    <div
                      className={style.similars_image}
                      style={{ backgroundImage: `url(${el.image})` }}></div>
                    <div className={style.similars_title}>{el.title}</div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
export default CurrentMovie;
