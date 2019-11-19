import React, { useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';


const ConnectionReg = ({ errors, touched, values, status }) => {

  const [travelers, setTravelers] = useState({ email: '', password: '', home_airport: '' });

  return (
    <div>
      <h1>KidsFly Connections Registration</h1>
      <Form>
        <Field
          type='text'
          name='email'
          placeholder='Email'
        />
        {touched.name && errors.email && (
          <p className='error'>{errors.email}</p>
        )}

        <Field
          type='password'
          name='password'
          placeholder='Password'
        />
        {touched.name && errors.password && (
          <p className='error'>{errors.password}</p>
        )}

        <Field
          type='text'
          name='home_airport'
          placeholder='Home Airport'
        />
        {touched.name && errors.home_airport && (
          <p className='error'>{errors.home_airport}</p>
        )}

        <button type='submit'>Submit</button>
      </Form>

    </div>
  );
};
const FormikForm = withFormik({
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

  handleSubmit(values) {
    console.log(values)
    axios.post('https://kidsfly-be-dakotah.herokuapp.com/api/auth/connections/register', values)
      .then(response => {

        console.log(response)
      })
      .catch(err => console.log(err))
  }




})(ConnectionReg)


export default FormikForm;