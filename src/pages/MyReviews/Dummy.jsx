import React from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

const Dummy = () =>{

    const url = process.env.REACT_APP_BACKEND_URL + "/users/1";
    useEffect(()=>{
        Axios.get(url).then(
            res =>{
                // debugger
            }
        ).catch(
            err=>{
                // debugger
            }
        )
    })
    return(
        <div>
            Hello
        </div>
    )
}
export default Dummy;