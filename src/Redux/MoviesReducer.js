import { imdbAPI } from "../Api/api";

const GET_MOVIES = "GET_MOVIES";
const LOADING_PAGE = "LOADING_PAGE";
const COUNT_ITEMS_IN_PAGE = "COUNT_ITEMS_IN_PAGE";
const PAGINATION = "PAGINATION";
const TRAILER_POPAP = "TRAILER_POPAP";
const SEARCH_CURRENT_MOVIE = "SEARCH_CURRENT_MOVIE";
const COMING_SOON = "COMING_SOON";
const SEARCH_MOVIES = "SEARCH_MOVIES";
const GET_SEARCH_TEXT = "GET_SEARCH_TEXT";
const TOGGLE_HASH_TAG = "TOGGLE_HASH_TAG";
const REVIEW_TEXT = "REVIEW_TEXT";
const REVIEW_ARRAY = "REVIEW_ARRAY";

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
  hashTag: false,
  searchText: "",
  reviewText: "",
  reviewArray: [{ idMovie: "1", message: "Good Movie!!!" }],
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
    case SEARCH_MOVIES: {
      return {
        ...state,
        movies: action.movies,
      };
    }
    case GET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.text,
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
    case TOGGLE_HASH_TAG: {
      return {
        ...state,
        hashTag: action.hashTag,
      };
    }
    case REVIEW_TEXT: {
      return {
        ...state,
        reviewText: action.text,
      };
    }
    case REVIEW_ARRAY: {
      let newObj = {
        idMovie: action.id,
        message: action.item,
      };
      return {
        ...state,
        reviewArray: [newObj, ...state.reviewArray],
        reviewText: "",
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
const getSearchMovies = (movies) => ({ type: SEARCH_MOVIES, movies });
const toggleHashTag = (hashTag) => ({ type: TOGGLE_HASH_TAG, hashTag });

export const getReviewText = (text) => ({ type: REVIEW_TEXT, text });
export const getReviewItems = (id, item) => ({ type: REVIEW_ARRAY, id, item });

export const useTrailerPopap = (statePopap) => ({
  type: TRAILER_POPAP,
  statePopap,
});
export const getSearchText = (text) => ({ type: GET_SEARCH_TEXT, text });

// Thunks

export const getAllMovies = (endpoint) => {
  let selectEndpoint;
  if (endpoint == "films") {
    selectEndpoint = imdbAPI.getMovie();
  } else if (endpoint == "serials") {
    selectEndpoint = imdbAPI.getSerials();
  } else if (endpoint == "top250") {
    selectEndpoint = imdbAPI.getTop();
  } else if (endpoint == "mostPopularMovies") {
    selectEndpoint = imdbAPI.getMostPopularMovies();
  } else {
    selectEndpoint = imdbAPI.getMovie();
  }
  return (dispatch) => {
    dispatch(loadingPage(false));
    selectEndpoint.then((data) => {
      dispatch(getMovies(data.results || data.items));
      dispatch(countItemInPage(data.results || data.items));
      dispatch(toggleHashTag(false));
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

export const searchMoviesTitle = (title) => {
  return (dispatch) => {
    dispatch(toggleHashTag(false));
    dispatch(loadingPage(false));
    imdbAPI.searchMovie(title).then((data) => {
      dispatch(getSearchMovies(data.results));
      dispatch(getMovies(data.results));
      dispatch(countItemInPage(data.results));
      dispatch(toggleHashTag(true));
      dispatch(loadingPage(true));
    });
  };
};

export default MovieReducer;
