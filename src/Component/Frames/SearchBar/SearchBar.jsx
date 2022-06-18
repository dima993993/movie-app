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
          onChange={(e) => props.getSearchText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              document.querySelector(`.${style.search_btn}`).click();
            }
          }}
        />
        <NavLink
          to={`/search?${props.searchText}`}
          onClick={() => props.searchMoviesTitle(props.searchText)}
          className={style.search_btn}>
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
      </div>
      <div className={style.movie_search_categories}>Categories Movies</div>
      <div className={style.categories}>
        {props.genres.map((el) => {
          let firstLetter = el.genre.split("")[0].toUpperCase();
          let resultWord = firstLetter + el.genre.slice(1, el.genre.length);
          return (
            <div>
              <NavLink
                to={`/genre?${el.genre}`}
                className={el.active ? style.active_link : ""}
                onClick={() => {
                  props.getAllMovies(el.genre);
                  props.activeGenre(el.genre);
                }}>
                {resultWord}
              </NavLink>
            </div>
          );
        })}
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
