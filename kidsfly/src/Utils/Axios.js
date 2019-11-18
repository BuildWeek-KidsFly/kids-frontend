import React from 'react';
import axios from 'axios';

export const axiosWithAuth = ()=>{
    axios.create({
        headers:{
            authorization: sessionStorage.getItem("token")
        }
    })
}

