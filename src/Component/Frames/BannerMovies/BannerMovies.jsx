import { NavLink } from "react-router-dom";
import style from "./BannerMovies.module.css";
const BannerMovies = (props) => {
  return (
    <div className={style.banner_wrapper}>
      <div className={style.banner_block}>
        <div>
          {props.mostPopularMovies.map((el) => {
            return (
              <NavLink
                to={`/movies/${el.id}`}
                className={style.item_wrapper}
                onClick={() => props.getCurrentMovie(el.id)}>
                <img src={el.image} alt={el.title} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BannerMovies;
