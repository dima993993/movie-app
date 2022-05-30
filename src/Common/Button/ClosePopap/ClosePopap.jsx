import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ClosePopap.module.css";

const ClosePopap = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};
export default ClosePopap;
