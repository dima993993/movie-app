import Pagination from "../../../Common/Pagination/Pagination";
import MovieItem from "./MovieItem";
import style from "./MoviesBlock.module.css";

const ListMovies = (props) => {
  return (
    <div>
      <div className={style.list_movies_wrapper}>
        {props.itemInPage.map((el) => (
          <MovieItem {...el} />
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
