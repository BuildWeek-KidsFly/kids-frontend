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
                    <h1>Enter the information about your trip!</h1>
                    <input type = "text" name = "airline" placeholder="airline" onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "airport_name" placeholder="airport_name"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "departure_time" placeholder="departure_time"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "flight_number" placeholder="flight_number"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "number_of_children" placeholder="number_of_children"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "number" name = "number_of_items" placeholder="number_of_items"onChange={handleinput}/>
                </div>
                <div>
                    <input type = "text" name = "special" placeholder="special"onChange={handleinput}/>
                </div>
                <Button onClick={sub}>Submit</Button>
            </form>
        </Card>
    </Container>
    );
}

export default AddTrip;