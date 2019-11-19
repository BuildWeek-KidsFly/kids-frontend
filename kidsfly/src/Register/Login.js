import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ values, errors, touched, status }) => {
  // const Login = ({ errors, touched, values }) => {
  const [user, setUser] = useState({ email: "", password: "" });
//   useEffect(() => {
//     status && setUser(user => [...user, status]);
//   }, [status]);

//   const handleChange = event => {
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(user);
//   };

  return (
    <div className="login-form">
      <Form>
          Enter Login
        <Field type="text" name="email" placeholder="Email" />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        Enter Password
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        <button>Submit</button>
      </Form>
      {/* {user.map(user => (
        <ul key={user.id}>
          <li>Username: {user.username}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))} */}
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values) {
      console.log("from formik", values)
    axios
      .post("https://kidsfly-be-dakotah.herokuapp.com/api/auth/login", values)
      .then(res => {
        // setStatus(res.data);
        console.log(res);
        localStorage.setItem("token", res.data.token)
      })
      .catch(err => console.log(err.response))
      .finally(() => {
          console.log('From Local Storage', localStorage.getItem("token"))
      })
  }
})(Login);

export default FormikLogin;
