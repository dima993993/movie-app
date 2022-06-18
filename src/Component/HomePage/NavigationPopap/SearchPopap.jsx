import { NavLink } from "react-router-dom";
import ClosePopap from "../../../Common/Button/ClosePopap/ClosePopap";
import style from "./Popap.module.css";

const SearchPopap = (props) => {
  return (
    <div className={style.search_wrapper}>
      <div className={style.search_position}>
        <div>Search Movies</div>
        <input
          type='text'
          placeholder='Search...'
          onChange={(e) => props.getSearchText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              props.searchMoviesTitle(props.searchText);
              document.querySelector(".redirect").click();
            }
          }}
        />
        <NavLink
          to={`/search?${props.searchText}`}
          className='redirect'></NavLink>
      </div>
      <div className={style.close} onClick={() => props.closePopap()}>
        <ClosePopap />
      </div>
    </div>
  );
};
export default SearchPopap;
