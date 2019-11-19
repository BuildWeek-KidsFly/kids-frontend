import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';
import axiosWithAuth from "../Utils/Axios";
const Dashboard = ()=>{

    const {isLoggedIn, traveler, setTraveler} = React.useContext(TripContext);

    console.log("traveler id", traveler);

    // React.useEffect(()=>{
    //     axiosWithAuth().get("https://kidsfly-be-dakotah.herokuapp.com/api/users/")
    //         .then((res)=>{
    //             console.log(res)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // },[])

        return(
            <div>
                <h1>Welcome customer, to the KidsFly dashboard</h1>

            </div>
        );
    

    
}

export default Dashboard;