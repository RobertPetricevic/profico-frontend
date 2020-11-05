/* eslint-disable no-case-declarations */
import { LOGIN, FETCH_LIST, TOGGLE_MODAL, ADD_USER } from "./actions";

const initialState = {
  isLoggedIn: false,
  isModalOn: true,
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
    case ADD_USER:
      const newUsers = [...state.usersList];
      newUsers.unshift(action.user);
      return {
        ...state,
        usersList: newUsers,
      };
    default:
      return state;
  }
};
