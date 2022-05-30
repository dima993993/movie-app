import MovieItem from "./MovieItem";
import style from "./Movies.module.css";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ListMovies = () => {
  return (
    <div className={style.list_movies_wrapper}>
      {arr.map((el) => (
        <MovieItem />
      ))}
    </div>
  );
};

export default ListMovies;
