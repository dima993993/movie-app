import { faCalendarCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import style from "./SearchBar.module.css";

const ComingSoon = (propsElement) => {
  return (
    <NavLink
      to={`/movies/${propsElement.id}`}
      className={style.coming_soon}
      onClick={() => propsElement.getCurrentMovie(propsElement.id)}>
      <div className={style.poster_block}>
        <img src={propsElement.image} alt={propsElement.title} />
      </div>
      <div className={style.text_block}>
        <div>{propsElement.title}</div>
        <div className={style.coming_soon_rating}>
          <span>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </span>
          <span>{propsElement.releaseState}</span>
        </div>
      </div>
    </NavLink>
  );
};

const SearchBar = (props) => {
  return (
    <div className={style.search_bar_wrapper}>
      <div className={style.movie_search_text}>Movie Search</div>
      <div className={style.input_search_block}>
        <input
          type='text'
          placeholder='Search Movies...'
          onKeyUp={(e) => props.getSearchText(e.target.value)}
        />
        <NavLink
          to={`/movies?search=${props.searchText}`}
          onClick={() => props.searchMoviesTitle(props.searchText)}
          className={style.search_btn}>
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
      </div>
      <div className={style.movie_search_categories}>Categories Movies</div>
      <div className={style.categories}>
        <div>Comedy</div>
        <div>Action</div>
        <div>Advanture</div>
        <div>Drama</div>
        <div>Horror</div>
        <div>Fantasy</div>
      </div>
      <div className={style.movie_search_coming_soon}>Coming Soon</div>
      <div className={style.coming_soon_block}>
        {props.comingSoon.map((el) => (
          <ComingSoon getCurrentMovie={props.getCurrentMovie} {...el} />
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
