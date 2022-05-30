import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import Logo from "./../../../Common/Logo/Logo.jsx";

const Header = () => {
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
          <NavLink to={"/"}>Movies</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Serials</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Top200</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Watch List</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Pages</NavLink>
        </div>
      </div>
      <div className={style.personal_info}>Personal Info</div>
    </div>
  );
};

export default Header;
