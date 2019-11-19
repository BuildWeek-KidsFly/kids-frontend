import React from 'react';
import './App.css';
import FormikForms from './Register/ParentReg';
import FormikForm from './Register/ConnectionReg';

function App() {

  return (
    <div className="App">
      <FormikForms />
      <FormikForm />
    </div>
  )
}

export default App;
