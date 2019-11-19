import React from 'react';
import {Link} from "react-router-dom";
const NavBar = ()=>{
    return(
        <div className = "Nav">
            <header className = "Header">
                <Link to="/signup">Sing Up</Link>
                <Link to="/login">Login</Link>
            </header>
        </div>
    );
}

export default NavBar;