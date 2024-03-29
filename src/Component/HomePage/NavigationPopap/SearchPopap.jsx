import ClosePopap from "../../../Common/Button/ClosePopap/ClosePopap";
import style from "./Popap.module.css";

const SearchPopap = (props) => {
  return (
    <div className={style.search_wrapper}>
      <div className={style.search_position}>
        <div>Search Movies</div>
        <input type='text' placeholder='Search...' />
      </div>
      <div className={style.close} onClick={() => props.closePopap()}>
        <ClosePopap />
      </div>
    </div>
  );
};
export default SearchPopap;
