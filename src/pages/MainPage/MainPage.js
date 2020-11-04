import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import UserBox from "../../components/Userbox/UserBox";
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
    <UserBox
      key={user.id}
      firstName={user.first_name}
      lastName={user.last_name}
      imgUrl={user.avatar}
    />
  ));

  return <div>{isLoading ? <p>Loading</p> : displayedList}</div>;
};

export default MainPage;
