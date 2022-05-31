import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SearchBar.module.css";
let arr = [1, 2, 3, 4];

const SearchBar = () => {
  let comingSoon = () => {
    return (
      <div className={style.coming_soon}>
        <div className={style.poster_block}>
          <img
            src='https://cdn.shopify.com/s/files/1/0057/3728/3618/products/255053349_408225954164881_580470973376990445_n_558x.jpg?v=1637860151'
            alt='Poster'
          />
        </div>
        <div className={style.text_block}>
          <div>Title Films</div>
          <div className={style.coming_soon_rating}>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>9.9</span>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nulla?
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={style.search_bar_wrapper}>
      <div className={style.movie_search_text}>Movie Search</div>
      <div className={style.input_search_block}>
        <input type='text' placeholder='Search Movies...' />
        <div>
          <FontAwesomeIcon icon={faSearch} />
        </div>
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
        {arr.map((el) => comingSoon())}
      </div>
    </div>
  );
};
export default SearchBar;
