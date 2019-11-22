import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';
import axiosWithAuth from "../Utils/Axios";
import {Link} from "react-router-dom";

const ConnectionDashboard = ()=>{

    const {traveler, setTraveler, user, setUser, trips, setTrips, complete, setComplete,setConnector} = React.useContext(TripContext);

    console.log("traveler id:",traveler.id)
    // console.log("user id:", user.id)
    setConnector(true);
    
    localStorage.setItem("traveler", JSON.stringify(traveler));

    React.useEffect(()=>{
        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/connections/${traveler.id}`)
            .then((res)=>{
                console.log(res)

                setUser(res.data)
                
            })
            .catch((err)=>{
                console.log(err)
            })

            axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/connections/${traveler.id}/trips`)
            .then((res)=>{
                console.log(res)
                
                setTrips(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                
            })
            
        
    },[complete])

   
    

        return(
            <div>
                <h1>Welcome Customer, to the Connection Dashboard</h1>
                <div className="dashboard">
                    <div className = "user">
                        <h2>{user.name}</h2>
                        <h4>{user.home_airport}</h4>
                    </div>
                    <div className="trips">
                        <h1>Your Flights</h1>
                        {
                            !trips.length > 0 ?
                            <div>
                                <h1>Looks like there haven't been any trips assigned to your area. Be sure to log back in later and check.</h1>
                                
                            </div>
                            
                            :
                            trips.map((t)=>(
                                <div>
                                    <h2>{t.airline}</h2>
                                    <h4>{t.airport_name}</h4>
                                    <h4>{t.departure_time}</h4>
                                    <h4>{t.flight_number}</h4>
                                    <h4>{t.number_of_children}</h4>
                                    <h4>{t.number_of_items}</h4>
                                    <h4>{t.special}</h4>
                                </div>
                            ))

                        }
                    </div>  
                </div>
            </div>
        );
    

    
}

export default ConnectionDashboard;