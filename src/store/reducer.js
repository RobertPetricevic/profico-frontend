import { LOGIN, FETCH_LIST } from "./actions";

const initialState = {
  isLoggedIn: true,
  usersList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
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
