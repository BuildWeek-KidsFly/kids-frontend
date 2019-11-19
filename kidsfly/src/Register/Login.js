import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



const Login = ( props ) => {
  // const Login = ({ errors, touched, values }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  
  
  return (
    <div className="login-form">
      <Form onSubmit={props.handleSubmit}>
          {!props.status ? <h1>Please enter login credentials</h1>: <h1>Authenticating...</h1>}
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="text" name="email" placeholder="Email" />
          {props.touched.username && props.errors.username && (
            <p className="errors">{props.errors.username}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" placeholder="Password" />
          {props.touched.password && props.errors.password && <p className="errors">{props.errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const ConnectionFormLogin = withFormik({
  
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

  handleSubmit(values, {setStatus, props}) {
      
      console.log("from formik", values)
      console.log("Formik props", props)

      setStatus(true);
    axios
      .post("https://kidsfly-be-dakotah.herokuapp.com/api/auth/login", values)
      .then(res => {
        // setStatus(res.data);
        console.log(res);
        localStorage.setItem("token", res.data.token)
        setStatus(false);
        props.history.push("/dashboard")
      })
      .catch((err) => {
        console.log(err.response)
        setStatus(false)
      })
      .finally(() => {
          console.log('From Local Storage', localStorage.getItem("token"))
      })
  }
})(Login);

export default ConnectionFormLogin;
