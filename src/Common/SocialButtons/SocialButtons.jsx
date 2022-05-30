import {
  faInstagram,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./SocialButtons.module.css";

const SocialButtons = () => {
  return (
    <div className={style.social_buttons}>
      <div>
        <a href='https://www.instagram.com/' target={"_blank"}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
        <a href='https://web.telegram.org/' target={"_blank"}>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/dima-terekhov/' target={"_blank"}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};
export default SocialButtons;
