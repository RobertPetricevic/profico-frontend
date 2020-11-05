import React from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../../store/actions";

import styles from "./styles.module.css";

const AddUserBtn = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.addBtn}
      onClick={() => {
        dispatch(toggleModal());
      }}
    >
      +
    </button>
  );
};

export default AddUserBtn;
