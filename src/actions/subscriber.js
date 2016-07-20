import * as actionTypes from '../constants/actionTypes';
import { latestSubSelector } from '../selectors/subscribers';

export function fetchLatestSub(user) {
  return dispatch => {
    return fetch(`https://api.twitch.tv/kraken/channels/${user}/follows?direction=DESC&limit=1`)
      .then(resp => resp.json())
      .then(json => {
        var follower = latestSubSelector(json);
        dispatch({
          type: actionTypes.SUBSCRIBERS_FETCH_SUCCESS,
          payload: follower
        });
      });
  }
}
