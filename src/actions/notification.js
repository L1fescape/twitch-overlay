import * as actionTypes from '../constants/actionTypes';
import { latestSubSelector }from '../selectors/subscribers';

export function showNotification(type, user) {
  var message = `Thanks ${user.name} for following the stream!`

  return {
    type: actionTypes.NOTIFICATION_SHOW,
    payload: {
      type,
      message
    }
  };
}

export function hideNotification() {
  return {
    type: actionTypes.NOTIFICATION_HIDE
  };
}