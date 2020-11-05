/* eslint-disable no-undef */
export const LOGIN = "LOGIN";
export const FETCH_LIST = "FETCH_LIST";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_USER = "ADD_USER";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error);
      }

      dispatch({ type: LOGIN });
    } catch (err) {
      throw err;
    }
  };
};

export const addUser = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          avatar:
            "https://gravatar.com/avatar/7c5815c863e2a2e4ff389c5f3f1e515a?s=400&d=robohash&r=x",
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error);
      }

      dispatch({
        type: ADD_USER,
        user: {
          first_name: resData.firstName,
          last_name: resData.lastName,
          avatar: resData.avatar,
          id: resData.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const fetchList = (page) => {
  return async (dispatch, getState) => {
    let data;

    const response = await fetch(
      `https://reqres.in/api/users?page=${page}&delay=1`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();

    if (page !== 1) {
      data = [...getState().usersList, ...resData.data];
    } else {
      data = [...resData.data];
    }

    dispatch({ type: FETCH_LIST, data });
  };
};
