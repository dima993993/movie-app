import style from "./HashTag.module.css";

const HashTag = (props) => {
  return (
    <div className={style.hash_tag}>
      <span>{props.text}</span>
      <span onClick={() => props.getAllMovies()}>X</span>
    </div>
  );
};
export default HashTag;
