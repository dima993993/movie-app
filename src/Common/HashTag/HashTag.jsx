import { NavLink } from "react-router-dom";
import style from "./HashTag.module.css";

const HashTag = (props) => {
  return (
    <div className={style.hash_tag}>
      <span>{props.text}</span>
      <NavLink to={"/movies"}>X</NavLink>
    </div>
  );
};
export default HashTag;
