import {GET_SELECTED_USER_DETAILS, GET_SELECTED_USER_DETAILS_SUCCESS,GET_SELECTED_USER_DETAILS_FAILURE } from '../types';

const initialState = {
  isLoading: false,
  details: {},
};
export const selectedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_USER_DETAILS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SELECTED_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        details: action.payload,
      };
    case GET_SELECTED_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        details: action.payload,
      };
    default:
      return state;
  }
};
