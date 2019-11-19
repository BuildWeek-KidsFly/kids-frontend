import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const ConnectionReg = (props) => {

  const [travelers, setTravelers] = useState({ email: '', password: '', home_airport: '' });

  return (
    <div>

      <Form>
        {!props.status ? <h1>Please enter Register credentials</h1> : <h1>Authenticating...</h1>}
        <div>
          <label htmlFor="email">Email:</label>
          <Field
            type='text'
            name='email'
            placeholder='Email'
          />
          {props.touched.name && props.errors.email && (
            <p className='error'>{props.errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field
            type='password'
            name='password'
            placeholder='Password'
          />
          {props.touched.name && props.errors.password && (
            <p className='error'>{props.errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="home_airport">Home Airport:</label>
          <Field
            type='text'
            name='home_airport'
            placeholder='Home Airport'
          />
          {props.touched.name && props.errors.home_airport && (
            <p className='error'>{props.errors.home_airport}</p>
          )}
        </div>
        <button type='submit'>Submit</button>
      </Form>

    </div>
  );
};
const FormikForms = withFormik({
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
    // axios.post('https://kidsfly-be-dakotah.herokuapp.com/api/auth/register', values)
    //   .then(response => {
    //     setStatus(false);
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     setStatus(false);
    //   })
  }




})(ConnectionReg)


export default FormikForms;
