import React from 'react';
import {TripContext} from "../Context/TripContext";
import axios from 'axios';

const UpdateParent =()=>{

    const [input, setInput] = React.useState({
        name:"",
        phone:"",
        home_airport:"",
        email:"",
        address:""
    })

    const {user} = React.useContext(TripContext);
    console.log("user",user);

    return(
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="Name"/>
            </div>

        </form>
    );
}

export default UpdateParent;