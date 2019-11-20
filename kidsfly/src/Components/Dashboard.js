import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';
import axiosWithAuth from "../Utils/Axios";
const Dashboard = ()=>{

    const {isLoggedIn, traveler, setTraveler, user, setUser} = React.useContext(TripContext);

    
    console.log("traveler id:",traveler.id)

    React.useEffect(()=>{
        axiosWithAuth().get(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${traveler.id}`)
            .then((res)=>{
                if(!localStorage.getItem("user")){
                    localStorage.setItem('user',JSON.stringify(res.data))
                }
                
                setUser(JSON.parse(localStorage.getItem('user')))
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])


    if(user === null){
        return(
            <h1>Loading...</h1>
        );
    }

    console.log("localuser", user);
    console.log("localStorage",localStorage.getItem('user'));

        return(
            <div>
                <h1>Welcome customer, to the KidsFly dashboard</h1>
                <div className="dashboard">
                    <div className = "user">
                        <h2>{user.name}</h2>
                        <h4>{user.home_airport}</h4>
                        <h4>{user.phone}</h4>

                    </div>
                    <div className="trips">

                    </div>
                </div>
                
            </div>
        );
    

    
}

export default Dashboard;