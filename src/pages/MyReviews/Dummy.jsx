import React from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { selectedUsers } from '../../state/actions/selectedusers';
import { connect } from 'react-redux';
const Dummy = ({selectedUsers,selectUserDetails}) =>{

    const url = process.env.REACT_APP_BACKEND_URL + "/users/1";
    useEffect(()=>{
        console.log(selectUserDetails)
        selectedUsers(2)
       
    //     Axios.get(url).then(
    //         res =>{
    //             // debugger
    //         }
    //     ).catch(
    //         err=>{
    //             // debugger
    //         }
    //     )
    })
    console.log(selectUserDetails)
    return(
        <div>
            Hello
        </div>
    )
}
const mapStateToProps =(state)=>{
    return {
        selectUserDetails:state.selectUserDetails 
    }
}
export default connect(mapStateToProps,{selectedUsers})(Dummy);


// state
// { Full Name
// Email Address
// Location
// Linkedin Link
// Username
// Age
// Github Link
// portfolio Link
// }


