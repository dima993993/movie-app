import { imdbAPI } from "../Api/api";

const GET_MOVIES = "GET_MOVIES";
const LOADING_PAGE = "LOADING_PAGE";
const COUNT_ITEMS_IN_PAGE = "COUNT_ITEMS_IN_PAGE";
const PAGINATION = "PAGINATION";
const TRAILER_POPAP = "TRAILER_POPAP";
const SEARCH_CURRENT_MOVIE = "SEARCH_CURRENT_MOVIE";
const COMING_SOON = "COMING_SOON";

let initialState = {
  movies: [],
  currentMovie: [],
  itemsInPage: [],
  comingSoon: [],
  toggleLoading: false,
  countItemsInPage: 15,
  currentPage: 1,
  countPage: 5,
  trailerPopap: false,
};

const getCountPageItem = (movies) => {
  let arr = [];
  let subArr = [];
  let counter = 0;
  movies.map((el) => {
    subArr.push(el);
    counter++;
    if (counter > initialState.countItemsInPage - 1) {
      arr.push(subArr);
      subArr = [];
      counter = 0;
    }
  });
  arr.push(subArr);
  return arr;
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
        itemsInPage: getCountPageItem(action.movies),
      };
    }
    case LOADING_PAGE: {
      return {
        ...state,
        toggleLoading: action.toggleState,
      };
    }
    case COMING_SOON: {
      return {
        ...state,
        comingSoon: action.comingSoonMovies,
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
const countItemInPage = (movies) => ({
  type: COUNT_ITEMS_IN_PAGE,
  movies,
});
const pagination = (currentPage) => ({ type: PAGINATION, currentPage });
const searchMovie = (movie) => ({ type: SEARCH_CURRENT_MOVIE, movie });
const getcomingSoonMovies = (comingSoonMovies) => ({
  type: COMING_SOON,
  comingSoonMovies,
});

export const useTrailerPopap = (statePopap) => ({
  type: TRAILER_POPAP,
  statePopap,
});

// Thunks

export const getAllMovies = () => {
  return (dispatch) => {
    dispatch(loadingPage(false));
    imdbAPI.getMovie().then((data) => {
      dispatch(getMovies(data.results));
      dispatch(countItemInPage(data.results));
      dispatch(loadingPage(true));
    });
    imdbAPI.getComingSoon().then((data) => {
      dispatch(getcomingSoonMovies(data.items));
    });
  };
};

export const usePagination = (currentPage) => {
  return (dispatch) => {
    dispatch(pagination(currentPage));
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
