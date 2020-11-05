import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ClipLoader } from "react-spinners";

import { login } from "../../store/actions";

import styles from "./styles.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  return (
    <div className={styles.loginPage}>
      {error && <p className={styles.submitErrText}>{error}</p>}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            await dispatch(login(values.email, values.password));
          } catch (err) {
            setError(err.message);
          }
        }}
        validate={(values) => {
          const errors = {};

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
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.loginBox}>
            <div className={styles.inputBox}>
              <label htmlFor="email">Email</label>
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="email"
              />
              <Field type="text" name="email" id="email" />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="password">Password</label>
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="password"
              />

              <Field type="password" name="password" id="password" />
            </div>
            <button className={styles.inputBtn}>
              {isSubmitting ? <ClipLoader size={10} /> : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
