import React from 'react';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="Nav">
            <header className="Header">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </header>
        </div>
    );
}

export default NavBar;