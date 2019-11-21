import React, { useState } from 'react';

export const TripContext = React.createContext();

export const TripProvider = props=>{
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true: false)
    //Honestly think Trips should just be an array since out travelers and careTakers are going to loop through them to create their dashboards
    const [trips, setTrips] = useState([]);

    const [complete, setComplete] = useState(false);

    //traveler just holds the id of parent or connection
    const [traveler, setTraveler] = useState(()=>{
        if(localStorage.getItem("traveler")){
            return JSON.parse(localStorage.getItem("traveler"))
        }else{
            return {}
        }

    });
    //user dynamically holds the connection or parent
    const [user, setUser] = useState({});

    const [theEditTrip, setTheEditTrip]= useState({});

    const setId = (id)=>{
        setTraveler({...traveler, id: id })
    }



    return(
        
        <TripContext.Provider value={{isLoggedIn, setLoggedIn, trips, setTrips, complete, setComplete, traveler, setTraveler, setId, user, setUser,theEditTrip,setTheEditTrip}}>
            {props.children}
        </TripContext.Provider>
    );
}