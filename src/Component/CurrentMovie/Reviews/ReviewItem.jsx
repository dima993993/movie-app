import style from "./Reviews.module.css";
const ReviewItem = (props) => {
  return (
    <div className={style.reviews}>
      <div className={style.review_item}>
        <div className={style.container_img}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            alt='User'
          />
        </div>
        <div className={style.container_text}>{props.text}</div>
      </div>
    </div>
  );
};
export default ReviewItem;
