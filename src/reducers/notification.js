import * as actionTypes from '../constants/actionTypes';

const initialState = {
  type: '',
  message: '',
  isOpen: false
};

export default function notificationReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case actionTypes.NOTIFICATION_SHOW:
      return {...state,
        message: action.payload.message,
        type: action.payload.type,
        isOpen: true
      }

    case actionTypes.NOTIFICATION_HIDE:
      return {...state,
        isOpen: false
      }

    default:
      return state
  }
}
