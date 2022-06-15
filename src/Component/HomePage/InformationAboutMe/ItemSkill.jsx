import style from "./InfoAboutMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemSkill = (props) => {
  let [subMenu, getSubMenu] = useState(false);
  console.log(subMenu);
  return (
    <div className={style.item_skills}>
      <div>
        <div className={style.item_block}>
          <span>
            <img src={props.icon} alt={props.title} />
          </span>
          <span>{props.title}</span>
        </div>
        <div
          className={subMenu ? style.arrow_rotate : style.arrow}
          onClick={() => getSubMenu(subMenu ? false : true)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className={subMenu ? style.active : style.disable}>
        <div className={subMenu ? style.show : style.hide}>
          <ul>
            {props.subMenu.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ItemSkill;
