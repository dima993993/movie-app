import { NavLink } from "react-router-dom";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  let basePath = window.location.href.split("/");
  let path = basePath[basePath.length - 1].split("?")[0];
  let paginationBtn = () => {
    let arr = [];
    let currentArrPage = [];
    for (let i = 1; i <= props.countPage; i++) {
      arr.push(i);
    }
    if (props.currentPage >= 3 && props.currentPage < props.countPage) {
      currentArrPage = arr.slice(props.currentPage - 3, props.currentPage + 2);
    } else if (props.currentPage < 3) {
      currentArrPage = arr.slice(0, 5);
    } else {
      currentArrPage = arr.slice(props.currentPage - 4, props.countPage);
    }

    return currentArrPage;
  };

  return (
    <div className={style.pagination_wrapper}>
      <div className={style.pagination}>
        {paginationBtn().map((el) => (
          <NavLink
            to={`/${path}?page=${el}`}
            onClick={() => {
              props.usePagination(el);
            }}
            className={props.currentPage == el ? style.active : ""}>
            {el}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Pagination;
