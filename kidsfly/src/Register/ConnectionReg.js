import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 60px;
background-image: url('https://images.unsplash.com/photo-1415959588285-66bbf7450d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60');
background-color: black;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-left: 60px;
margin-right:60px;

`;

const Card = styled.div`
background: #999999;
width: 400px;
max-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
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


const ConnectionReg = (props) => {

  console.log("connection Reg")
  const [travelers, setTravelers] = useState({ email: '', password: '', home_airport: '' });

  return (
    <Container>
      <Card>

        <Form>
          {!props.status ? <h1>Please enter Register credentials</h1> : <h1>Authenticating...</h1>}
          <div>
            <label htmlFor="email">Email</label>
            <Box>
              <Field
                type='text'
                name='email'
                placeholder='Email'
              />
              {props.touched.name && props.errors.email && (
                <p className='error'>{props.errors.email}</p>
              )}
            </Box>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Box>
              <Field
                type='password'
                name='password'
                placeholder='Password'
              />
              {props.touched.name && props.errors.password && (
                <p className='error'>{props.errors.password}</p>
              )}
            </Box>
          </div>
          <div>
            <label htmlFor="home_airport">Home Airport</label>
            <Box>
              <Field
                type='text'
                name='home_airport'
                placeholder='Home Airport'
              />
              {props.touched.name && props.errors.home_airport && (
                <p className='error'>{props.errors.home_airport}</p>
              )}
            </Box>
          </div>
          <button type='submit'>Submit</button>
        </Form>

      </Card>
    </Container>
  );
};
const CRegFormikForms = withFormik({
  mapPropsToValues({ email, password, home_airport }) {
    return {
      email: email || '',
      password: password || '',
      home_airport: home_airport || ''
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('email required'),
    password: Yup.string().required('password required'),
    home_airport: Yup.string().required('airport required')


  }),

  handleSubmit(values, { setStatus, props }) {
    //adjust below end point

    console.log(values)
    setStatus(true);
    axios.post('https://kidsfly-be-dakotah.herokuapp.com/api/auth/connections/register', values)
      .then(res => {
        localStorage.setItem("token", res.data.token)
        setStatus(false);
        props.YEET(res.data.id)
        props.history.push("/connectionLog")
        // console.log(response)
      })
      .catch(err => {
        console.log(err)
        setStatus(false);
      })
  }




})(ConnectionReg)


export default CRegFormikForms;
