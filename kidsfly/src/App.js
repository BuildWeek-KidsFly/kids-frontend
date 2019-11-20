import React from 'react';
import './App.css';
import FormikForms from './Register/ParentReg';
import NavBar from "./Components/Navbar";
import './App.css';
import Login from "./Register/Login";
import Dashboard from "./Components/Dashboard";
import PrivateDash from "./PrivateRoutes/PrivateDash";
import {TripContext} from "./Context/TripContext";
import Landing from "./Components/Landing";
import AddTrip from "./Components/AddTrip";
import ConnectionFormikLogin from "./Register/ConnectionLogin";
import CRegFormikForms from "./Register/ConnectionReg";

import { Switch, Link, Route } from "react-router-dom";


function App() {

  const {setId} = React.useContext(TripContext)

  return (
    <div className="App">

      <NavBar/>

      <Switch>
        <PrivateDash path="/dashboard">
          <Route path="/dashboard" component={Dashboard} />
        </PrivateDash>
        <Route exact path="/connectionReg" render={(props)=> <CRegFormikForms {...props} YEET={setId}/>}/>
        <Route path="/parentReg" render={(props)=> <ConnectionFormikLogin {...props} YEET={setId}/>}/>
        <Route path="/signup" render={(props)=><FormikForms {...props} YEET={setId}/>}/>
        <Route path="/login" render={(props)=> <Login {...props} YEET={setId}/>}/>
        <Route path="/addTrip" component={AddTrip}/>
        <Route path="/"component={Landing}/>
        <Route component={Landing}/>
      </Switch> 
      {/* <Landing /> */}
      {/* <Switch/>

        <Route path="/signup" component={FormikForms} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch> */}

    </div>
  )
}


export default App;
