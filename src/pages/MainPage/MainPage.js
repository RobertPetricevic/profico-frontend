import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchList } from "../../store/actions";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchList());
    } catch (err) {
      setError(err.messsage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const displayedList = usersList.map((user) => (
    <li key={user.id}>{user.email}</li>
  ));

  return <div>{isLoading ? <p>Loading</p> : displayedList}</div>;
};

export default MainPage;
