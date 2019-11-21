import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


import {Link} from "react-router-dom";


const NavBar = (props)=>{

    const clear = () => {
        window.location.reload();
        localStorage.clear();
        
        props.history.push("/");
    }
   
const Button = styled.button`
    background: #FFCC00;
    border-radius: 20px;
    height: 50px;
    width: 130px;
    border: solid black 2px;
    font-size: 1.2rem;
    :hover {
        background: red;
        cursor: pointer;
        box-shadow: 3px 3px 3px black;
    }
`;

    return (
        <div className="Nav">
            <header className="Header">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Parent Login</NavLink>
                <NavLink to="/signup">Parent Sign Up</NavLink>
                <NavLink to="/connectionLog">Connect Login</NavLink>
                <NavLink to="/connectionReg">Connect Sign Up</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/connectdashboard">Connection Dashboard</NavLink>
                <Button onClick={clear}>Log Out</Button>

            </header>
        </div>
    );
}

export default NavBar;