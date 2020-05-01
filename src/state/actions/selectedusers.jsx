import * as types from "../types";
import axios from "axios";


export const selectedUsers =(id)=> async dispatch => { 
    const url = process.env.REACT_APP_BACKEND_URL + "/users/" + id;
    dispatch({type:types.GET_SELECTED_USER_DETAILS})
    try{
        const response =await axios.get(url)
        dispatch({type:types.GET_SELECTED_USER_DETAILS_SUCCESS, payload:response})
    }
    catch(error){
      dispatch({type:types.GET_SELECTED_USER_DETAILS_FAILURE, payload:"Unable to fetch user details!"})  
    }

}