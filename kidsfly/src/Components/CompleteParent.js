import React from 'react';
import {TripContext} from "../Context/TripContext";
import axiosWithAuth from "../Utils/Axios";


const Complete = ()=>{

    const {user, traveler} = React.useContext(TripContext)
    console.log("user:",user, "trav", traveler)

    const [input, setInput] = React.useState({
        name:"",
        address: "",
        phone: ""
    })

    const handleChange = (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSub = (e)=> {
        e.preventDefault();
        axiosWithAuth().put(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${user.id}`, input)
            .then((res)=>{
                console.log(res)
                localStorage.removeItem("user")
                localStorage.removeItem("trips")
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return(
        <form>
            <h2>Please enter additional information</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value ={input.name} onChange={handleChange}></input>
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value ={input.address} onChange={handleChange}></input>
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" value ={input.phone} onChange={handleChange}></input>
            </div>
            <button onClick={handleSub}>submit</button>
        </form>
    );
}

export default Complete;