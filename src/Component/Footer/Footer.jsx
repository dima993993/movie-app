import style from "./Footer.module.css";
import Logo from "./../../Common/Logo/Logo";
import SocialButtons from "./../../Common/SocialButtons/SocialButtons";
const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <div>
        <div>
          <p>MY QUESTION</p>
        </div>
        <div className={style.logo_wrapper}>
          <Logo />
        </div>
        <div>&copy; Test Project 2022</div>
      </div>
      <div>
        <div>
          <p>What abilities do I need to improve?</p>
          <p>How to get an internship in IT?</p>
        </div>
        <div className={style.contact_wrapper}>
          <div>dima.terehov.00@gmail.com</div>
          <div>+380999469579</div>
        </div>
        <div className={style.social_buttons_wrapper}>
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};
export default Footer;
