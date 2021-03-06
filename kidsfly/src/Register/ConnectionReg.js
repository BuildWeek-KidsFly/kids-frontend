import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 60px;
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



const ConnectionReg = (props) => {

  console.log("connection Reg")
  const [travelers, setTravelers] = useState({ email: '', password: '', home_airport: '' });

  return (
    <Background>
      <Container>
        <Card>

          <Form>
            {!props.status ? <h1>Connection Registration</h1> : <h1>Authenticating...</h1>}
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
              <label htmlFor="home_airport">Home airport</label>
              <Box>
                <Field
                  type='text'
                  name='home_airport'
                  placeholder='home airport'
                />
                {props.touched.home_airport && props.errors.home_airport && (
                  <p className='error'>{props.errors.home_airport}</p>
                )}
              </Box>
            </div>

            <Button type='submit'>Register</Button>
            <p>Already have an Account? <NavLink to='/connectionLog'>Click Here</NavLink></p>
          </Form>

        </Card>
      </Container>
    </Background>
  );
};

const CRegFormikForms = withFormik({
  mapPropsToValues({ email, password, home_airport}) {
    return {
      email: email || '',
      password: password || '',
      home_airport: home_airport||''
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('email required'),
    password: Yup.string().required('password required'),
    home_airport: Yup.string().required("home airport needed")

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
