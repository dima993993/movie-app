import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "./../../../Common/Logo/Logo.jsx";

const Header = (props) => {
  let path = window.location.href.split("/");
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.navigation}>
        <div>
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div>
          <NavLink
            to={"/movies"}
            onClick={() => {
              props.getAllMovies("films");
              props.usePagination(1);
            }}>
            Movies
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/movies?search=serials"}
            onClick={() => {
              props.getAllMovies("serials");
              props.usePagination(1);
            }}>
            Serials
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/movies?search=top250"}
            onClick={() => {
              props.getAllMovies("top250");
              props.usePagination(1);
            }}>
            Top250
          </NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Watch List</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Pages</NavLink>
        </div>
      </div>
      <div className={style.personal_info}>
        Personal Info:
        <br />
        dima.terehov.00@gmail.com
      </div>
    </div>
  );
};

export default Header;
