import style from "./NavigationAside.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../Common/Logo/Logo";
import SocialButtons from "../../../Common/SocialButtons/SocialButtons";

const NavigationAside = (props) => {
  return (
    <div className={style.aside_wrapper}>
      <div className={style.aside}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.icon_wrapper}>
          <div className={style.icon}>
            <div className={style.navigation} onClick={() => props.openNav()}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={style.search} onClick={() => props.openSearch()}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className={style.social_buttons_wrapper}>
          <div className={style.social_buttons}>
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationAside;
