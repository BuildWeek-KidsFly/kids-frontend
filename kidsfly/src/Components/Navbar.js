import React from 'react';

import {Link} from "react-router-dom";

const NavBar = (props)=>{

    
    const clear = () => {
        window.location.reload();
        localStorage.clear();
        
        props.history.push("/");
    }
   

    return (
        <div className="Nav">
            <header className="Header">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/connectionLog">Connection Login</Link>
                <Link to="/connectionReg">Connection Registration</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/connectdashboard">Connection Dashboard</Link>
                <button onClick={clear}>Log out</button>
            </header>
        </div>
    );
}

export default NavBar;