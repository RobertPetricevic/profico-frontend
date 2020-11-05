import { LOGIN, FETCH_LIST, TOGGLE_MODAL } from "./actions";

const initialState = {
  isLoggedIn: true,
  isModalOn: false,
  usersList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOn: !state.isModalOn,
      };
    case FETCH_LIST:
      return {
        ...state,
        usersList: action.data,
      };
    default:
      return state;
  }
};
