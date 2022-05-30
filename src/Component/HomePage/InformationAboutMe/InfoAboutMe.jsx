import Slider from "../../../Common/Slider/Slider";
import style from "./InfoAboutMe.module.css";

const InfoAboutMe = () => {
  return (
    <div className={style.info_about_me}>
      <div className={style.carousel}>
        <Slider />
      </div>
      <div className={style.short_info_in_life}>Short Info In My Life</div>
      <div className={style.about_skills}>Block about my SKILLS</div>
    </div>
  );
};
export default InfoAboutMe;
