import React from 'react';

import {Link} from "react-router-dom";
const NavBar = ()=>{
    const clear = () => {
        window.location.reload();
        localStorage.clear();
    }
   

    return (
        <div className="Nav">
            <header className="Header">
                <Link to="/">Home</Link>
                <Link to="/login">Parent Login</Link>
                <Link to="/signup">Parent Sign Up</Link>
                <Link to="/connectionLog">Connect Login</Link>
                <Link to="/connectionReg">Connect Sign Up</Link>
                <Link to="/dashboard">Dashboard</Link>
                <button onClick={clear}>Log out</button>
            </header>
        </div>
    );
}

export default NavBar;