import ReviewItem from "./ReviewItem";
import style from "./Reviews.module.css";
import React from "react";
const Reviews = (props) => {
  return (
    <div className={style.reviews_wrapper}>
      <div className={style.title}>Reviews</div>
      <div className={style.text_area}>
        <textarea
          placeholder='Enter review...'
          onChange={(e) => props.getReviewText(e.target.value)}
          value={props.reviewText}></textarea>

        <div className={style.send_message}>
          <button
            onClick={
              props.reviewText != ""
                ? () =>
                    props.getReviewItems(
                      props.currentMovie.id,
                      props.reviewText
                    )
                : null
            }>
            Send Review
          </button>
        </div>
      </div>
      <div>
        {props.reviewArray.map((el) => {
          if (el.idMovie == props.currentMovie.id) {
            return <ReviewItem text={el.message} />;
          }
        })}
      </div>
    </div>
  );
};
export default Reviews;
