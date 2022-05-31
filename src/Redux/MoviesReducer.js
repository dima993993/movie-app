import { testApi } from "../Api/api";

const GET_MOVIES = "GET_MOVIES";

let initialState = {
  movies: [],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.movies,
      };
    }
    default:
      return state;
  }
};

// Action Creators

const getMovies = (movies) => ({ type: GET_MOVIES, movies });

// Thunks

export const getAllMovies = () => {
  return (dispatch) => {
    testApi.test().then((data) => {
      dispatch(getMovies(data));
    });
  };
};

export default MovieReducer;
