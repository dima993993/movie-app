import { NavLink } from "react-router-dom";
import ClosePopap from "../../../Common/Button/ClosePopap/ClosePopap.jsx";
import Logo from "./../../../Common/Logo/Logo.jsx";
import style from "./Popap.module.css";
import SocialButtons from "./../../../Common/SocialButtons/SocialButtons";

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
            {NavigationItem("/serials", "Serials")}
            {NavigationItem("/top250", "Top250")}
            {NavigationItem("/", "Watch List")}
            {NavigationItem("/", "Pages")}
            <div className={style.logo}>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div className={style.information}>
        <div>
          <div className={style.contacts}>
            <h3>Contact Inormation</h3>
            <div>dima.terehov.00@gmail.com</div>
            <div>+380999469579</div>
          </div>
          <div className={style.social_buttons}>
            <h3>Social Buttons</h3>
            <SocialButtons />
          </div>
        </div>
      </div>
      <div className={style.close} onClick={() => props.closePopap()}>
        <ClosePopap />
      </div>
    </div>
  );
};
export default NavigationPopap;
