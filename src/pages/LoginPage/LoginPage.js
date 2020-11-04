import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";

import styles from "./styles.module.css";

const LoginPage = (props) => {
  return (
    <div className={styles.loginPage}>
      <Form className={styles.loginBox}>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <ErrorMessage name="email" />
          <Field type="text" name="email" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="password">Password</label>
          <ErrorMessage name="password" />
          <Field type="password" name="password" />
        </div>
        <button className={styles.inputBtn}>Submit</button>
      </Form>
    </div>
  );
};

const FormikLoginPage = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: "",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
  validate: (values) => {
    let errors = [];

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Email not valid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
  },
})(LoginPage);

export default FormikLoginPage;
