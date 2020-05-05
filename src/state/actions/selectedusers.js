import * as types from "../types";
import axios from "axios";


export const selectedUsers =(id)=> async dispatch => { 

    const typeSuccess =  types.GET_SELECTED_USER_DETAILS_SUCCESS; 
    const typeFailure =  types.GET_SELECTED_USER_DETAILS_FAILURE
    const exchangeApi = process.env.REACT_APP_BACKEND_URL + "/users/" + id;
    dispatch({type:types.GET_SELECTED_USER_DETAILS})
    try{
     
        const response =await axios.get(exchangeApi)
        dispatch({type: typeSuccess, payload:response.data})
        ;
    
    }
    catch(error){
      dispatch({type: typeFailure, payload:error})  
    }
    
}