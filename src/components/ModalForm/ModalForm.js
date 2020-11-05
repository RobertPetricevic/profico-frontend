/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useDispatch } from "react-redux";

import { toggleModal } from "../../store/actions";

import styles from "./styles.module.css";

const ModalForm = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.modalScreen}>
      <form className={styles.modalContent}>
        <p
          className={styles.exitBtn}
          onClick={() => {
            dispatch(toggleModal());
          }}
        >
          +
        </p>
        <div className={styles.inputBox}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Type your first name here"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Type your last name here"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Type your email here"
          />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="url">Image URL</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Type your avatar URL here"
          />
        </div>
        <p style={{ textAlign: "left" }}>OR</p>
        <div className={styles.inputBox}>
          <label htmlFor="uploadPhoto">Upload your photo</label>
          <input type="file" name="uploadPhoto" id="uploadPhoto" />
        </div>
        <button className={styles.inputBtn}>Submit</button>
      </form>
    </div>
  );
};

ModalForm.propTypes = {};

export default ModalForm;
