import style from "./PopapForTrailer.module.css";
import ClosePopap from "./../Button/ClosePopap/ClosePopap";
import React from "react";
import ReactPlayer from "react-player";
const PopapForTrailer = (props) => {
  console.log(props);
  return (
    <div className={style.popap_wrapper}>
      <div
        className={style.close_popap}
        onClick={() => props.useTrailerPopap(false)}>
        <ClosePopap />
      </div>
      <div className={style.popap}>
        <div>{props.title}</div>
        <div className={style.video_player}>
          {/* <iframe
            width='860px'
            height='400px'
            src={props.trailer.linkEmbed}
            title={props.title}
            allowFullScreen></iframe> */}
          <ReactPlayer url={props.trailer.thumbnailUrl} />
        </div>
        <div className={style.description}>{props.plot}</div>
      </div>
    </div>
  );
};
export default PopapForTrailer;
