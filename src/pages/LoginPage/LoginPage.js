import React from "react";

import styles from "./styles.module.css";

const LoginPage = (props) => {
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginBox}>
        <div className={styles.inputBox}>
          <label htmlFor="loginEmail">Email</label>
          <input type="text" name="loginEmail" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="loginPass">Password</label>
          <input type="password" name="loginPass" />
        </div>
        <button className={styles.inputBtn}>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
