import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imdbAPI } from "../../../Api/api";
import style from "./CommonButton.module.css";

const CommonButton = (props) => {
  return (
    <div
      className={style.button}
      onClick={() => imdbAPI.getMovie().then((data) => console.log(data))}>
      <div className={style.first_btn}></div>
      <div className={style.second_btn}></div>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.name}</span>
    </div>
  );
};
export default CommonButton;
