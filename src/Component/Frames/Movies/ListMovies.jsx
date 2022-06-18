import Dropdown from "../../../Common/Dropdown/Dropdown";
import HashTag from "../../../Common/HashTag/HashTag";
import Pagination from "../../../Common/Pagination/Pagination";
import MovieItem from "./MovieItem";
import style from "./MoviesBlock.module.css";

const ListMovies = (props) => {
  return (
    <div>
      <div className={style.filter_block}>
        <div>
          {props.hashTag ? (
            <HashTag
              text={props.hashTagText}
              getAllMovies={props.getAllMovies}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <div>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className={style.list_movies_wrapper}>
        {props.itemInPage[props.currentPage - 1].map((el) => (
          <MovieItem
            {...el}
            openTrailerPopap={props.openTrailerPopap}
            getCurrentMovie={props.getCurrentMovie}
          />
        ))}
      </div>
      <Pagination
        currentPage={props.currentPage}
        usePagination={props.usePagination}
        countPage={props.countPage}
        activePage={props.activePage}
      />
    </div>
  );
};

export default ListMovies;
