import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import HomePageReducer from "./HomePageReducer";
import MovieReducer from "./MoviesReducer";

let reducers = combineReducers({
  HomePage: HomePageReducer,
  MoviesPage: MovieReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
