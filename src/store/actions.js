export const LOGIN = "LOGIN";
export const FETCH_LIST = "FETCH_LIST";

export const login = () => {
  return { type: LOGIN };
};

export const fetchList = () => {
  return async (dispatch) => {
    // eslint-disable-next-line no-undef
    const response = await fetch("https://reqres.in/api/users?page=2&delay=2");

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const resData = await response.json();

    dispatch({ type: FETCH_LIST, data: resData.data });
  };
};
