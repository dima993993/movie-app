import InfoAboutMe from "./InformationAboutMe/InfoAboutMe";
import NavigationAside from "./NavigationAside/NavigationAside";
import style from "./HomePage.module.css";
import NavigationPopap from "./NavigationPopap/NavigationPopap";
import SearchPopap from "./NavigationPopap/SearchPopap";

const HomePage = (props) => {
  let popapActive = () => {
    if (props.state.navPopap) {
      return <NavigationPopap closePopap={props.state.closePopap} />;
    } else if (props.state.searchPopap) {
      return <SearchPopap closePopap={props.state.closePopap} />;
    } else {
      return (
        <div className={style.home_page}>
          <NavigationAside
            openNav={props.state.openNavPopap}
            openSearch={props.state.openSearchPopap}
          />
          <InfoAboutMe />
        </div>
      );
    }
  };
  return <div>{popapActive()}</div>;
};
export default HomePage;
