import { NavLink } from "react-router-dom";
import ClosePopap from "../../../Common/Button/ClosePopap/ClosePopap.jsx";
import Logo from "./../../../Common/Logo/Logo.jsx";
import style from "./Popap.module.css";

const NavigationPopap = (props) => {
  let NavigationItem = (path, nameItem) => {
    return (
      <div onClick={() => props.closePopap()}>
        <NavLink to={path}>{nameItem}</NavLink>
      </div>
    );
  };
  return (
    <div className={style.navigation_popap_wrapper}>
      <div className={style.navigation_popap}>
        <div className={style.navigation}>
          <div className={style.nav_position}>
            {NavigationItem("/", "Home")}
            {NavigationItem("/movies", "Movies")}
            {NavigationItem("/", "Serials")}
            {NavigationItem("/", "Top200")}
            {NavigationItem("/", "Watch List")}
            {NavigationItem("/", "Pages")}
            <div className={style.logo}>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className={style.information}>
        <div className={style.information}>
          <div className={style.contacts}></div>
          <div className={style.social_buttons}></div>
        </div>
      </div>
      <div className={style.close} onClick={() => props.closePopap()}>
        <ClosePopap />
      </div>
    </div>
  );
};
export default NavigationPopap;
