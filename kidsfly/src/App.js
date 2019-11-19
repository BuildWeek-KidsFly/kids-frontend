import React from 'react';
import './App.css';
import FormikForms from './Register/ParentReg';

import Login from "./Register/Login";


import './App.css';
import Login from "./Register/Login";

function App() {

  return (
    <div className="App">
      <FormikForms />
      <header className="App-header">
        <Login />
      </header>
    </div>
  )
}


export default App;
