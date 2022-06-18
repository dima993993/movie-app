import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageContainer from "./Component/HomePage/HomePageContainer";
import FramesContainer from "./Component/Frames/FramesContainer";
import CurrentMovieContainer from "./Component/CurrentMovie/CurrentMovieContainer";
import SerialsContainer from "./Component/Frames/SerialsContainer";
import TopContainer from "./Component/Frames/TopContainer";
import GenreContainer from "./Component/Frames/GanreContainer";
import SearchContainer from "./Component/Frames/SearchContainer";

const App = () => {
  return (
    <div className='app_wrapper'>
      <Routes>
        <Route path='/' element={<HomePageContainer />}></Route>
        <Route path='/movies' element={<FramesContainer />}></Route>
        <Route path='/serials' element={<SerialsContainer />}></Route>
        <Route path='/top250' element={<TopContainer />}></Route>
        <Route path='/genre' element={<GenreContainer />}></Route>
        <Route path='/search' element={<SearchContainer />}></Route>
        <Route path='/movies/:id' element={<CurrentMovieContainer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
