/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { ClipLoader } from "react-spinners";

import UserBox from "../../components/Userbox/UserBox";
import SearchInput from "../../components/SearchInput/SearchInput";

import { fetchList } from "../../store/actions";

import styles from "./styles.module.css";
import ModalForm from "../../components/ModalForm/ModalForm";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);

  const [isLoading, setIsLoading] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  console.log("searchText:", searchText);

  const getData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    if (page !== 1) {
      setIsReadMore(true);
    }

    try {
      await dispatch(fetchList(page));
    } catch (err) {
      setError(err.messsage);
    }
    setIsLoading(false);
    setIsReadMore(false);
  }, [dispatch, page]);

  const handleSearchList = (text) => {
    if (text.trim().length >= 2) {
      setSearchText(text.trim());
    } else {
      setSearchText("");
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const displayedList = usersList.map((user) => {
    if (
      `${user.first_name.toLowerCase()} ${user.last_name.toLowerCase()}`.includes(
        searchText.toLowerCase()
      )
    )
      return (
        <UserBox
          key={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          imgUrl={user.avatar}
        />
      );
  });

  return (
    <div className={styles.mainPage}>
      <ModalForm />
      <SearchInput onSearch={handleSearchList} />
      <div className={styles.mainContent}>
        {isLoading && !isReadMore ? <ClipLoader size={100} /> : displayedList}
      </div>
      {isReadMore ? (
        <ClipLoader />
      ) : (
        <p
          className={styles.readMore}
          onClick={() => {
            setPage((prevNum) => prevNum + 1);
          }}
        >
          read more
        </p>
      )}
    </div>
  );
};

export default MainPage;
