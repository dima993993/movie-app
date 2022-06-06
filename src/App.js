import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import Preloader from "./Common/Preloader/Preloader";
import FramesContainer from "./Component/Frames/FramesContainer";
import CurrentMovieContainer from "./Component/CurrentMovie/CurrentMovieContainer";
import SerialsContainer from "./Component/Frames/Serials/SerialsContainer";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Routes>
        <Route path='/' element={<HomePageContainer />}></Route>
        <Route path='/movies' element={<FramesContainer />}></Route>
        <Route path='/serials' element={<SerialsContainer />}></Route>
        <Route path='/preloader' element={<Preloader />}></Route>
        <Route path='/movies/:id' element={<CurrentMovieContainer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
