import { combineReducers, createStore } from "redux";
import HomePageReducer from "./HomePageReducer";
import MovieReducer from "./MoviesReducer";

let reducers = combineReducers({
  HomePage: HomePageReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
