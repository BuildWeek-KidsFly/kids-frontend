import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';
import axiosWithAuth from "../Utils/Axios";
import {Link} from "react-router-dom";

const Dashboard = (props)=>{

    const { traveler, user, setUser, trips, setTrips, complete, setComplete, theEditTrip, setTheEditTrip,setParent} = React.useContext(TripContext);

    console.log("traveler id:",traveler.id)
    // console.log("user id:", user.id)
    setParent(true);

    localStorage.setItem("traveler", JSON.stringify(traveler));

    React.useEffect(()=>{
        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${traveler.id}`)
            .then((res)=>{
                console.log("user data use effect",res)
                
                setUser(res.data)
                
            })
            .catch((err)=>{
                console.log(err)
            })

        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${traveler.id}/trips`)
            .then((res)=>{
                
                console.log("the response from second",res)
                setTrips(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                
            })
           
            
        
    },[complete])

    const removeTrip = (id)=>{
        axiosWithAuth().delete(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${user.id}/trips/${id}`)
            .then((res)=>{
                // console.log("removeTrip",res)
            })
            .catch((err)=>{
                // console.log("removeTrip",err)
            })
            .finally(()=>{
                setComplete(complete=> !complete);
            })
    }

    const editTheTrip = (trip)=>{
        setTheEditTrip(trip);
        props.history.push("/edittrip");
    }

        return(
            <div>
                
                {
                
                    !user.phone ?
                    <div>
                        <h1>Looks like your account isn't complete. Follow the link to add more info.</h1>
                        <Link to="/completeparent">Complete My Account</Link>
                    </div>
                   
                    :
                    <div>
                        <h1>Welcome Customer, to your KidsFly Dashboard</h1>
                    <div className="dashboard">
                        <div className = "user">
                            {/* {console.log("full", user)} */}
                            <h1>Your Contact Info</h1>
                            <h2>Name: {user.name}</h2>
                            <h4>Home airport: {user.home_airport}</h4>
                            <h4>Phone: {user.phone}</h4>
                            
                            <Link to="/updateparent">Update</Link>
                        </div>
                        <div className="trips">
                            <h1>Your Flights</h1>
                            {/* {console.log("trips",trips)} */}
                            {trips.map((t)=>(
                                <div className="Trip">
                                    <h2>Airline: {t.airline}</h2>
                                    <h4>Airport name: {t.airport_name}</h4>
                                    <h4>Departure time: {t.departure_time}</h4>
                                    <h4>Flight number: {t.flight_number}</h4>
                                    <h4>Number of children: {t.number_of_children}</h4>
                                    <h4>Number of items: {t.number_of_items}</h4>
                                    <h4>Special requests: {t.special}</h4>
                                    <button onClick={()=>removeTrip(t.id)}>Delete</button>
                                    <button onClick={()=>editTheTrip(t)}>Edit Trip</button>
                                </div>
                            ))}
                        </div>
                            
                    </div>
                    <Link to="/addTrip">Add Trip</Link>
                    </div>
                    
                    
                }
            </div>
        );
    

    
}

export default Dashboard;