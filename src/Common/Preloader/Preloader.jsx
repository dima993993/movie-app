import style from "./Preloader.module.css";
const Preloader = () => {
  return (
    <div className={style.container_preloader}>
      <div className={style.preloader}></div>
    </div>
  );
};
export default Preloader;
