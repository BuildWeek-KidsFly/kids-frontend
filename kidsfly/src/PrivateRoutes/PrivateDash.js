import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {TripContext} from "../Context/TripContext";

function isAuth(){
    return localStorage.getItem("token") ? true : false;
    
}

const PrivateDash = ({children, ...rest})=>{
  
  const {connector} = React.useContext(TripContext);

  return(
      <Route {...rest} render={({location}) => isAuth() && !connector ? (children) : 
        (<Redirect to={{ pathname: '/', state:{from: location}}}/>)}/>
      
  );

    

}


export default PrivateDash;