import React from 'react';
import {Route, Redirect} from "react-router-dom";

function isAuth(){
    return localStorage.getItem("token") ? true : false;
    
}

const PrivateConnectDash = ({children, ...rest})=>{
  

  return(
      <Route {...rest} render={({location}) => isAuth() ? (children) : 
        (<Redirect to={{ pathname: '/connectionLog', state:{from: location}}}/>)}/>
      
  );

    

}


export default PrivateConnectDash;