import style from "./Movies.module.css";
const BannerMovies = () => {
  return (
    <div className={style.banner_wrapper}>
      <div className={style.banner_block}>
        <div
          style={{
            backgroundImage:
              'url("https://ichef.bbci.co.uk/news/1536/cpsprodpb/14990/production/_89586348_istock_000080279023_medium.jpg")',
          }}></div>
      </div>
    </div>
  );
};
export default BannerMovies;
