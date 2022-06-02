import { testApi } from "../Api/api";

const GET_MOVIES = "GET_MOVIES";
const LOADING_PAGE = "LOADING_PAGE";
const COUNT_ITEMS_IN_PAGE = "COUNT_ITEMS_IN_PAGE";
const PAGINATION = "PAGINATION";
// const MAKE_ACTIVE_PAGE = "MAKE_ACTIVE_PAGE";

let initialState = {
  movies: [],
  toggleLoading: false,
  itemsInPage: [],
  countItemsInPage: 15,
  currentPage: 1,
  countPage: 5,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.movies,
        countPage: Math.ceil(action.movies.length / state.countItemsInPage),
      };
    }
    case COUNT_ITEMS_IN_PAGE: {
      return {
        ...state,
        itemsInPage: state.movies.slice(action.prev, action.next),
      };
    }
    case LOADING_PAGE: {
      return {
        ...state,
        toggleLoading: action.toggleState,
      };
    }
    case PAGINATION: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    default:
      return state;
  }
};

// Action Creators

const getMovies = (movies) => ({ type: GET_MOVIES, movies });
const loadingPage = (toggleState) => ({ type: LOADING_PAGE, toggleState });
const countItemInPage = (prev, next) => ({
  type: COUNT_ITEMS_IN_PAGE,
  prev,
  next,
});
const pagination = (currentPage) => ({ type: PAGINATION, currentPage });

// Thunks

export const getAllMovies = (
  prev = 0,
  next = initialState.countItemsInPage
) => {
  return (dispatch) => {
    dispatch(loadingPage(false));
    testApi.test().then((data) => {
      dispatch(getMovies(data));
      dispatch(countItemInPage(prev, next));
      dispatch(loadingPage(true));
    });
  };
};

export const usePagination = (currentPage) => {
  let prev = (currentPage - 1) * initialState.countItemsInPage;
  let next = currentPage * initialState.countItemsInPage;
  return (dispatch) => {
    dispatch(pagination(currentPage));
    dispatch(getAllMovies(prev, next));
  };
};

export default MovieReducer;
