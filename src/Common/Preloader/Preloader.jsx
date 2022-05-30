import style from "./Preloader.module.css";
const Preloader = () => {
  return (
    <div className={style.container_preloader}>
      <div className={style.preloader}>&#9734;</div>
    </div>
  );
};
export default Preloader;
