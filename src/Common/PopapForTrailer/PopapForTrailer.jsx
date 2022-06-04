import style from "./PopapForTrailer.module.css";
import ClosePopap from "./../Button/ClosePopap/ClosePopap";
const PopapForTrailer = (props) => {
  return (
    <div className={style.popap_wrapper}>
      <div
        className={style.close_popap}
        onClick={() => props.useTrailerPopap(false)}>
        <ClosePopap />
      </div>
      <div className={style.popap}>
        <div>TRAILER</div>
        <div className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          praesentium eum vero totam, saepe laborum eligendi! Sequi dolorem,
          illo nulla saepe mollitia eveniet dolor, ratione blanditiis odit
          incidunt, aperiam eos atque architecto voluptates ullam qui explicabo?
          Unde exercitationem quo, eius eligendi vel sunt ipsa placeat autem
          numquam sit qui laboriosam.
        </div>
      </div>
    </div>
  );
};
export default PopapForTrailer;
