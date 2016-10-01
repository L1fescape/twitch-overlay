import * as actionTypes from '../constants/actionTypes';
import { latestSubSelector } from '../selectors/subscribers';

const { CLIENT_ID } = process.env;

export function fetchLatestSub(user) {
  return dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Client-ID', CLIENT_ID);

    var myInit = {
      method: 'GET',
     headers: myHeaders
    };

    var myRequest = new Request(`https://api.twitch.tv/kraken/channels/${user}/follows?direction=DESC&limit=1`, myInit);
    return fetch(myRequest, myInit)
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
