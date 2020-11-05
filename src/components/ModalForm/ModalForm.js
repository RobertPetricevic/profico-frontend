/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { ClipLoader } from "react-spinners";

import { toggleModal, addUser } from "../../store/actions";

import styles from "./styles.module.css";

const ModalForm = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  return (
    <div className={styles.modalScreen}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          url: "",
          file: null,
        }}
        onSubmit={async (values) => {
          try {
            await dispatch(addUser(values.firstName, values.lastName));
            dispatch(toggleModal());
          } catch (err) {
            setError(err.message);
          }
        }}
        validate={(values) => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = "First name is required";
          }

          if (!values.lastName) {
            errors.lastName = "Last name is required";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              values.email
            )
          ) {
            errors.email = "Email not valid";
          }

          if (!values.url && !values.file) {
            errors.url = "Add URL or upload a photo";
          }

          return errors;
        }}
      >
        {({ isSubmitting, setFieldValue, errors }) => (
          <Form className={styles.modalContent}>
            {error && <p className={styles.submitErrText}>{error}</p>}
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
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="firstName"
              />
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Type your first name here"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="lastName">Last name</label>
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="lastName"
              />
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Type your last name here"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="email">Email</label>
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="email"
              />
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Type your email here"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="url">Image URL</label>
              <Field
                type="text"
                name="url"
                id="url"
                placeholder="Type your avatar URL here"
              />
            </div>
            {!errors.url ? (
              <p
                style={{
                  textAlign: "left",
                  marginTop: 0,
                }}
              >
                OR
              </p>
            ) : (
              <ErrorMessage
                component="p"
                className={styles.validationErrText}
                name="url"
              />
            )}
            <div className={styles.inputBox}>
              <label htmlFor="uploadPhoto">Upload your photo</label>
              <Field
                type="file"
                name="uploadPhoto"
                id="uploadPhoto"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
            </div>
            <button className={styles.inputBtn}>
              {isSubmitting ? <ClipLoader size={10} /> : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalForm;
