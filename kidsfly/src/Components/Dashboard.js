import React from 'react';
import {TripContext} from "../Context/TripContext";
const Dashboard = ()=>{

    const {isLoggedIn, traveler, setTraveler} = React.useContext(TripContext);

    const handlesub = (e)=>{
        e.preventDefault();
        setTraveler([...traveler, "test"])
    }

    if(isLoggedIn){
        return(
            <div>
                <h1>Welcome customer, to the KidsFly dashboard</h1>
                {traveler.map((y)=>(
                    <p>{y}</p>
                ))}
                <button onClick={handlesub}>add me</button>
            </div>
        );
    }

    
}

export default Dashboard;