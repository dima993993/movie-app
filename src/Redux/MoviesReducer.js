import { imdbAPI, testApi } from "../Api/api";

const GET_MOVIES = "GET_MOVIES";
const LOADING_PAGE = "LOADING_PAGE";
const COUNT_ITEMS_IN_PAGE = "COUNT_ITEMS_IN_PAGE";
const PAGINATION = "PAGINATION";
const TRAILER_POPAP = "TRAILER_POPAP";
const SEARCH_CURRENT_MOVIE = "SEARCH_CURRENT_MOVIE";

let initialState = {
  movies: [],
  currentMovie: [],
  itemsInPage: [],
  toggleLoading: false,
  countItemsInPage: 15,
  currentPage: 1,
  countPage: 5,
  trailerPopap: false,
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
    case SEARCH_CURRENT_MOVIE: {
      return {
        ...state,
        currentMovie: action.movie,
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
    case TRAILER_POPAP: {
      return {
        ...state,
        trailerPopap: action.statePopap,
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
const searchMovie = (movie) => ({ type: SEARCH_CURRENT_MOVIE, movie });

export const useTrailerPopap = (statePopap) => ({
  type: TRAILER_POPAP,
  statePopap,
});

// Thunks

export const getAllMovies = (
  prev = 0,
  next = initialState.countItemsInPage
) => {
  return (dispatch) => {
    dispatch(loadingPage(false));
    imdbAPI.getMovie().then((data) => {
      dispatch(getMovies(data.results));
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

export const getCurrentMovie = (id) => {
  return (dispatch) => {
    dispatch(loadingPage(false));
    imdbAPI.currentMovie(id).then((data) => {
      dispatch(searchMovie(data));
      dispatch(loadingPage(true));
    });
  };
};
export const openTrailerPopap = (id) => {
  return (dispatch) => {
    dispatch(getCurrentMovie(id));
    dispatch(useTrailerPopap(true));
  };
};

export default MovieReducer;
