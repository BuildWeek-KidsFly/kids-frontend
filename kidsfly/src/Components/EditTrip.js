import React from "react";
import {TripContext} from "../Context/TripContext";
import axiosWithAuth from "../Utils/Axios";

const EditTrip = (props)=>{

    const {user,setComplete,complete,setTheEditTrip,theEditTrip} = React.useContext(TripContext)
    console.log("trip",theEditTrip)
    console.log("user", user)
    


    const handleinput = (e)=>{
        setTheEditTrip({...theEditTrip, [e.target.name]: e.target.value})
    }

    const sub = (e)=>{
        e.preventDefault();
        console.log(theEditTrip)

        axiosWithAuth().put(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${user.id}/trips/${theEditTrip.id}`, theEditTrip)
            .then((res)=>{
                console.log(res)
                
                // setComplete(complete=>!complete);
            }
                
            )
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                props.history.push("/dashboard")
            })

            
    }

    return(
        <form>
            <h2>Edit trip</h2>
            <div>
                <label>Airline:</label>
                <input type = "text" name = "airline" value={theEditTrip.airline} placeholder="airline" onChange={handleinput}/>
            </div>
            <div>
                <label>Airport Name:</label>
                <input type = "text" name = "airport_name" value={theEditTrip.airport_name} placeholder="airport_name"onChange={handleinput}/>
            </div>
            <div>
                <label>Departure Time</label>
                <input type = "text" name = "departure_time" value={theEditTrip.departure_time} placeholder="departure_time"onChange={handleinput}/>
            </div>
            <div>
                <label>Flight Number:</label>
                <input type = "number" name = "flight_number" value={theEditTrip.flight_number} placeholder="flight_number"onChange={handleinput}/>
            </div>
            <div>
                <label>Number of Children:</label>
                <input type = "number" name = "number_of_children" value={theEditTrip.number_of_children} placeholder="number_of_children"onChange={handleinput}/>
            </div>
            <div>
                <label>Number of Items:</label>
                <input type = "number" name = "number_of_items" value={theEditTrip.number_of_items} placeholder="number_of_items"onChange={handleinput}/>
            </div>
            <div>
                <label>Special Request:</label>
                <input type = "text" name = "special" value={theEditTrip.special} placeholder="special"onChange={handleinput}/>
            </div>
            <button onClick={sub}>Submit</button>
        </form>
    );
}

export default EditTrip;