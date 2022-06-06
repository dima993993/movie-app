import InfoAboutMe from "./InformationAboutMe/InfoAboutMe";
import NavigationAside from "./NavigationAside/NavigationAside";
import style from "./HomePage.module.css";
import NavigationPopap from "./NavigationPopap/NavigationPopap";
import SearchPopap from "./NavigationPopap/SearchPopap";

const HomePage = (props) => {
  let popapActive = () => {
    if (props.navPopap) {
      return <NavigationPopap closePopap={props.closePopap} />;
    } else if (props.searchPopap) {
      return <SearchPopap {...props} />;
    } else {
      return (
        <div className={style.home_page}>
          <NavigationAside
            openNav={props.openNavPopap}
            openSearch={props.openSearchPopap}
          />
          <InfoAboutMe />
        </div>
      );
    }
  };
  return <div>{popapActive()}</div>;
};
export default HomePage;
