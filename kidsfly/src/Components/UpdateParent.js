import React from 'react';
import {TripContext} from "../Context/TripContext";
import axiosWithAuth from "../Utils/Axios";
import {Container, Card, Button, UpdateStyle, UpdateStyleChild} from "../Styled/Styled"

const UpdateParent =(props)=>{

    // const [input, setInput] = React.useState({
    //     name:user.name,
    //     phone:user.phone,
    //     home_airport:user.home_airport,
    //     email:user.email,
    //     address:user.address
    // })

    const {user, setUser, complete, setComplete} = React.useContext(TripContext);
   

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSub = (e) =>{
        e.preventDefault();
        console.log(user)
        console.log(axiosWithAuth);
        axiosWithAuth().put(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${user.id}`, user)
            .then((res)=>{
                console.log(res)
                setComplete(complete=>!complete);
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=>{
                props.history.push("/dashboard")
            })
    }

    return(
        <Container>
            <Card>
                <UpdateStyle>
                    <h2>Update Any Information Below</h2>
                    <UpdateStyleChild>  
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={user.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="text" name="phone" value={user.phone} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input type="text" name="address" value={user.address} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" value={user.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Home Airport: </label>
                        <input type="text" name="home_airport" value={user.home_airport} onChange={handleChange}/>
                    </div>
                    </UpdateStyleChild>
                </UpdateStyle>
                <Button onClick={handleSub}>Update</Button>
            </Card> 
        </Container>

        
        
    );
}

export default UpdateParent;