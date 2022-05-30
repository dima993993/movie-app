const OPEN_NAV_POPAP = "OPEN_NAV_POPAP";
const OPEN_SEARCH_POPAP = "OPEN_SEARCH_POPAP";
const CLOSE_POPAP = "CLOSE_POPAP";

let initialState = {
  navPopap: false,
  searchPopap: false,
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NAV_POPAP: {
      return {
        ...state,
        navPopap: true,
      };
    }
    case OPEN_SEARCH_POPAP: {
      return {
        ...state,
        searchPopap: true,
      };
    }
    case CLOSE_POPAP: {
      return {
        ...state,
        searchPopap: false,
        navPopap: false,
      };
    }
    default:
      return state;
  }
};
// ActionCreator

export const openNavPopap = () => ({ type: OPEN_NAV_POPAP });
export const openSearchPopap = () => ({ type: OPEN_SEARCH_POPAP });
export const closePopap = () => ({ type: CLOSE_POPAP });

export default HomePageReducer;
