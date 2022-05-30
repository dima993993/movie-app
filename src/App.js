import "./App.css";
import Frames from "./Component/Frames/Frames";
import { Routes, Route } from "react-router-dom";
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import Preloader from "./Common/Preloader/Preloader";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Routes>
        <Route path='/' element={<HomePageContainer />}></Route>
        <Route path='/movies' element={<Frames />}></Route>
        <Route path='/preloader' element={<Preloader />}></Route>
      </Routes>
    </div>
  );
};

export default App;
