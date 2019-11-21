import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';
import axiosWithAuth from "../Utils/Axios";
import {Link} from "react-router-dom";

const Dashboard = ()=>{

    const { traveler,  user, setUser, trips, setTrips} = React.useContext(TripContext);

    console.log("traveler id:",traveler.id)
    console.log("user id:", user.id)

    

    React.useEffect(()=>{
        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${traveler.id}`)
            .then((res)=>{
                console.log(res)
                if(!localStorage.getItem("user")){
                    localStorage.setItem('user',JSON.stringify(res.data))
                }
                setUser(JSON.parse(localStorage.getItem('user')))
                
            })
            .catch((err)=>{
                console.log(err)
            })
           
            
        
    },[])

    React.useEffect(()=>{
        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${traveler.id}/trips`)
            .then((res)=>{
                // console.log(res)
                if(!localStorage.getItem("trips")){
                    localStorage.setItem('trips',JSON.stringify(res.data))
                }
                setTrips(JSON.parse(localStorage.getItem('trips')));
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                
            })
    },[])


    // if(user.phone===null){
    //     console.log("condition")
    //     return(
    //         <h1>Loading...</h1>
    //     );
    // }

        return(
            <div>
                
                {
                
                    !user.phone ?
                    <div>
                        <h1>Looks like your account isn't complete, follow the link to add more info</h1>
                        <Link to="/completeparent">Complete My Account</Link>
                    </div>
                   
                    :
                    <div>
                        <h1>Welcome customer, to your kidsfly dashboard</h1>
                            <div className="dashboard">
                        <div className = "user">
                            {console.log("full", user)}
                            <h2>{user.name}</h2>
                            <h4>{user.home_airport}</h4>
                            <h4>{user.phone}</h4>
                            <p>{user.id}</p>
                            <Link to="/updateparent">Update</Link>
                        </div>
                        <div className="trips">
                            <h1>Your Flights</h1>
                            {trips.map((t)=>(
                                <div>
                                    <h2>{t.airline}</h2>
                                    <h4>{t.airport_name}</h4>
                                    <h4>{t.departure_time}</h4>
                                    <h4>{t.flight_number}</h4>
                                    <h4>{t.number_of_children}</h4>
                                    <h4>{t.number_of_items}</h4>
                                    <h4>{t.special}</h4>
                                </div>
                            ))}
                        </div>
                            
                    </div>
                    <Link to="/addTrip">Add Trip</Link>
                    </div>
                    
                    
                }
                {/* <h1>Welcome customer, to your KidsFly dashboard</h1>
                <div className="dashboard">
                    <div className = "user">
                        {console.log("full", user)}
                        <h2>{user.name}</h2>
                        <h4>{user.home_airport}</h4>
                        <h4>{user.phone}</h4>
                        <p>{user.id}</p>
                    </div>
                    <div className="trips">
                        <h1>Your Flights</h1>
                        {trips.map((t)=>(
                            <div>
                                <h2>{t.airline}</h2>
                                <h4>{t.airport_name}</h4>
                                <h4>{t.departure_time}</h4>
                                <h4>{t.flight_number}</h4>
                                <h4>{t.number_of_children}</h4>
                                <h4>{t.number_of_items}</h4>
                                <h4>{t.special}</h4>
                            </div>
                        ))}
                    </div>
                        
                </div>
                <Link to="/addTrip">Add Trip</Link> */}
            </div>
        );
    

    
}

export default Dashboard;