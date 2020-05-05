import React from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import { selectedUsers } from '../../state/actions/selectedusers';
import { connect } from 'react-redux';
const Dummy = ({ selectedUsers, details }) => {
  console.log(details.username);
  const url = process.env.REACT_APP_BACKEND_URL + '/users/1';
  useEffect(() => {
    selectedUsers(2);
  }, []);
  if(!details){return <h1>loading...</h1>}
  return <div><h1>{details.username}</h1></div>;
};
const mapStateToProps = state => {
    // debugger
  return {
    details: state.selectUserDetails,
  };
};
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
