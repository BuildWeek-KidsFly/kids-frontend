import React from "react";
import {TripContext} from "../Context/TripContext";
import axiosWithAuth from "../Utils/Axios";
import {Card, Button, Container} from "../Styled/Styled";

const AddTrip = (props)=>{

    const {user,setComplete,complete} = React.useContext(TripContext)
    

    const [input, setInput] = React.useState({
        airline:"",
        airport_name:"",
        departure_time:"",
        flight_number:"",
        number_of_children:"",
        number_of_items:"",
        special:""
    })



    const handleinput = (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const sub = (e)=>{
        e.preventDefault();
        console.log(input)

        axiosWithAuth().post(`https://kidsfly-be-dakotah.herokuapp.com/api/users/${user.id}/trips`, input)
            .then((res)=>{
                console.log(res)
                localStorage.removeItem("trips");
                setComplete(complete=>!complete);
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
    <Container>
        <Card>
            <form>
                <div>
                    <h1>Enter Your Travel Information</h1>
                    <input type = "text" name = "airline" placeholder="Airline" onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "airport_name" placeholder="Airport Name"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "departure_time" placeholder="Departure Time"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "flight_number" placeholder="Flight Number"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "number_of_children" placeholder="Number of Children"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "number_of_items" placeholder="Number of Items"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "special" placeholder="Special"onChange={handleinput}/>
                </div>
                <Button onClick={sub}>Submit</Button>
            </form>
        </Card>
    </Container>
    );
}

export default AddTrip;