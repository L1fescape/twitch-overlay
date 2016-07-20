import * as actionTypes from '../constants/actionTypes';

const initialState = {
  subscribers: [],
  latestSub: ''
};

export default function subscriberReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case actionTypes.SUBSCRIBERS_FETCH_SUCCESS:
      return {...state,
        latestSub: action.payload
      }

    default:
      return state
  }
}
