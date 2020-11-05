/* eslint-disable no-undef */
export const LOGIN = "LOGIN";
export const FETCH_LIST = "FETCH_LIST";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const STORE_USER = "STORE_USER";

export const login = (email, password) => {
  return async (dispatch) => {
    // console.log(email + password);
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

      console.log(resData.error);

      if (!response.ok) {
        console.log("ERR");
        throw new Error(resData.error);
      }

      dispatch({ type: LOGIN });
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
