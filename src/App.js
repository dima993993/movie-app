import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import Preloader from "./Common/Preloader/Preloader";
import Frames from "./Component/Frames/Frames";
import ListMovies from "./Component/Frames/Movies/ListMovies";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Routes>
        <Route path='/' element={<HomePageContainer />}></Route>
        <Route path='/movies' element={Frames(<ListMovies />)}></Route>
        <Route path='/serials' element={Frames(<div>Serials</div>)}></Route>
        <Route path='/preloader' element={<Preloader />}></Route>
      </Routes>
    </div>
  );
};

export default App;
