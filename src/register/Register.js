import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import "./Register.css";

const initialValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  role: ["user"],
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter First Name"),
  lastName: Yup.string().required("Enter Last Name"),
  dob: Yup.string().required("Enter Date of Birth Name"),
  email: Yup.string()
    .email("Enter e-Mail Name")
    .required("Pls enter valid email address"),
  userName: Yup.string().required("Enter User Name"),
  password: Yup.string().required("Enter password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password should match"
  ),
});
const submitForm = (values, action) => {
  console.log("Values", values);
};
const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="firstName"
              label="First Name"
              type="text"
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              label="Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="dob"
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="email"
              label="Email"
              type="email"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="username"
              type="text"
              label="User Name"
            />
          </div>
          <div className="col-3 text-center p-3">
            <div className="row text-center pl-5" id="checkbox-group">
              Role
            </div>
            <div className="row">
              <div className="col-2">
                <label>
                  <Field type="checkbox" name="role" value="user" />
                  User
                </label>
              </div>
              <div className="col-2">
                <label>
                  <Field type="checkbox" name="role" value="admin" />
                  Admin
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
          </div>
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
          </div>
        </div>
        <div className="row">{props.isSubmitting && <LinearProgress />} </div>
        <div className="row">
          <div className="col-6 p-3 text-center">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="register__btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);
const Register = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
        component={RegistrationForm}
      ></Formik>
    </div>
  );
};
export default Register;
