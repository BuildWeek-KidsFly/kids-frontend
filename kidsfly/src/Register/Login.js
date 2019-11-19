import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
background-image: url('https://images.unsplash.com/photo-1415959588285-66bbf7450d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60');
background-color: black;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-left: 100px;
margin-right:100px;



`;

const Card = styled.div`
background: #999999;
width: 400px;
max-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 80px;
box-shadow: 5px 5px #666666 ;
border: 2px solid white;
color: #ffcc00;
`;

const Box = styled.div`
  padding-left: 2px;

`;

const Button = styled.button`
 border: 2px solid black;
  background-color: #ffcc00;
  color: black;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

`;







const Login = (props) => {
  // const Login = ({ errors, touched, values }) => {
  const [user, setUser] = useState({ email: "", password: "" });


  return (
    <Container>
      <Card>
        <div className="login-form">
          <Form onSubmit={props.handleSubmit}>
            {!props.status ? <h1>Please enter login credentials</h1> : <h1>Authenticating...</h1>}

            <label htmlFor="email">Email</label>
            <Box>
              <Field type="text" name="email" placeholder="Email" />
              {props.touched.username && props.errors.username && (
                <p className="errors">{props.errors.username}</p>
              )}
            </Box>

            <label htmlFor="password">Password</label>
            <Box>
              <Field type="password" name="password" placeholder="Password" />
              {props.touched.password && props.errors.password && <p className="errors">{props.errors.password}</p>}
            </Box>


            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </Card>
    </Container>
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

  handleSubmit(values, { setStatus, props }) {

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
