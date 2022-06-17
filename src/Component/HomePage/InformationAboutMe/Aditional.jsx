import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./InfoAboutMe.module.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faImages } from "@fortawesome/free-solid-svg-icons";

const Aditional = () => {
  return (
    <div className={style.additional}>
      <h2>Additional</h2>
      <div className={style.additional_items}>
        <div className={style.item}>
          <div>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div>
            Self-education by means of video tutorials on programming on YouTube
          </div>
        </div>
        <div className={style.item}>
          <div>
            <FontAwesomeIcon icon={faImages} />
          </div>
          <div>Interested in graphic design (Adobe Illustrator, Blender)</div>
        </div>
        <div className={style.item}>
          <div>
            <FontAwesomeIcon icon={faGamepad} />
          </div>
          <div>
            Keen on Unity cross-platform game engine for video games development
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aditional;
