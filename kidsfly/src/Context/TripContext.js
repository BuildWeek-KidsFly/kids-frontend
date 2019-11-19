import React, { useState } from 'react';

export const TripContext = React.createContext();

export const TripProvider = props=>{
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true: false)
    //Honestly think Trips should just be an array since out travelers and careTakers are going to loop through them to create their dashboards
    const [trips, setTrips] = useState([]);

    const [complete, setComplete] = useState(false);
    const [traveler, setTraveler] = useState({
        id:""
    });

    const setId = (id)=>{
        setTraveler({...traveler, id: id })
    }



    return(
        
        <TripContext.Provider value={{isLoggedIn, setLoggedIn, trips, setTrips, complete, setComplete, traveler, setTraveler, setId}}>
            {props.children}
        </TripContext.Provider>
    );
}