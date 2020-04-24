import * as types from '../types';

const initialState = {
    isClose: true,
}
export const isCloseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ISCLOSE_CHANGE:
      return { ...state, isClose: !(state.isClose) };
    default:
      return state;
  }
};