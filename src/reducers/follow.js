import * as actionTypes from '../constants/actionTypes';

const initialState = {
  followers: [],
  latest: {}
};

export default function folowReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case actionTypes.FOLLOWERS_FETCH_SUCCESS:
    console.log("action", action.payload)
      return {...state,
        latest: action.payload
      }

    default:
      return state
  }
}
