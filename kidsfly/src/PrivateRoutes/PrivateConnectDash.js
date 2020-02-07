import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {TripContext} from "../Context/TripContext";

function isAuth(){
    return localStorage.getItem("token") ? true : false;
    
}

const PrivateConnectDash = ({children, ...rest})=>{
  
  const {parent} = React.useContext(TripContext);

  return(
      <Route {...rest} render={({location}) => isAuth() && !parent ? (children) : 
        (<Redirect to={{ pathname: '/', state:{from: location}}}/>)}/>
      
  );

    

}


export default PrivateConnectDash;