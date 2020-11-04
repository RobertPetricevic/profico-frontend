import React from "react";

import styles from "./styles.module.css";

const UserBox = (props) => {
  return (
    <div className={styles.userBox}>
      <img src={props.imgUrl} alt="User" className={styles.userImg} />
      <p className={styles.userInfo}>{props.firstName}</p>
      <p className={styles.userInfo}>{props.lastName}</p>
    </div>
  );
};

UserBox.propTypes = {};

export default UserBox;
