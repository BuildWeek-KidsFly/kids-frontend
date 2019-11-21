import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 80px;
`;

const Background = styled.div`
background: url('https://images.unsplash.com/photo-1572198404182-2c115d89fb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
height: 100vh;
`;

const Card = styled.div`
background: #091d86;
width: 400px;
max-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 80px;
box-shadow: 5px 5px black ;
border: 2px solid #999999;
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
  :hover {
            background: #5963DD;
            cursor: pointer;
            box-shadow: 3px 3px 3px black;
        }

`;




const ConnectionLogin = (props) => {
  // const Login = ({ errors, touched, values }) => {
  const [user, setUser] = useState({ email: "", password: "" });


  console.log("connection log")
  return (
    <Background>
      <Container>
        <Card>
          <div className="login-form">
            <Form onSubmit={props.handleSubmit}>
              {!props.status ? <h1>Connection Login </h1> : <h1>Authenticating...</h1>}
              <div>
                <label htmlFor="email">Email:</label>
                <Box>
                  <Field type="text" name="email" placeholder="Email" />
                  {props.touched.username && props.errors.username && (
                    <p className="errors">{props.errors.username}</p>
                  )}
                </Box>
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Box>
                  <Field type="password" name="password" placeholder="Password" />
                  {props.touched.password && props.errors.password && <p className="errors">{props.errors.password}</p>}
                </Box>
              </div>
              <Button type="submit">Login</Button>
            </Form>
          </div>
        </Card>
      </Container>
    </Background>
  );
};

const ConnectionFormikLogin = withFormik({

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
    //replace below with 'connection' endpoint

    console.log("from formik", values)
    console.log("Formik props", props)

    setStatus(true);
    axios
      .post("https://kidsfly-be-dakotah.herokuapp.com/api/auth/connections/login", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
        localStorage.setItem("token", res.data.token)
        setStatus(false);
        props.YEET(res.data.id)
        props.history.push("/connectdashboard")
      })
      .catch((err) => {
        console.log(err.response)
        setStatus(false)
      })
      .finally(() => {
        console.log('From Local Storage', localStorage.getItem("token"))
      })
  }
})(ConnectionLogin);

export default ConnectionFormikLogin;