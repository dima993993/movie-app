import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import Preloader from "./Common/Preloader/Preloader";
import FramesContainer from "./Component/Frames/FramesContainer";
import Pagination from "./Common/Pagination/Pagination";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Routes>
        <Route path='/' element={<HomePageContainer />}></Route>
        <Route path='/movies' element={<FramesContainer />}></Route>
        <Route path='/preloader' element={<Preloader />}></Route>
      </Routes>
    </div>
  );
};

export default App;
