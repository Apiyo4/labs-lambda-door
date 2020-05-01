import * as types from "../types";

const initialState ={
    isLoading: false,
    details: {}
}
export const selectedUserReducer =(state=initialState, action)=>{
    debugger;
    switch(action.type){
        case types.GET_SELECTED_USER_DETAILS:
            return{
                ...state,
                isLoading : true,
            }
            
        case types.GET_SELECTED_USER_DETAILS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                details: action.payload
            }
        case types.GET_SELECTED_USER_DETAILS_FAILURE:
            return{
                ...state,
                isLoading: false,
                details: action.payload
            }
        default:
            return state;    
    }
}