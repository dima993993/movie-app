import { NavLink } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo_wrapper}>
      <NavLink to={"/"}>
        <span>
          FRAME<span className={style.star}>&#9734;</span>S
        </span>
      </NavLink>
    </div>
  );
};
export default Logo;
