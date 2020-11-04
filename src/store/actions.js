/* eslint-disable no-undef */
export const LOGIN = "LOGIN";
export const FETCH_LIST = "FETCH_LIST";

export const login = () => {
  return { type: LOGIN };
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
