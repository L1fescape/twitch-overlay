import * as actionTypes from '../constants/actionTypes';
import { latestFollowSelector } from '../selectors/follower';

const { CLIENT_ID } = process.env;

export function fetchLatestFollow(user) {
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
        var follower = latestFollowSelector(json);
        dispatch({
          type: actionTypes.FOLLOWERS_FETCH_SUCCESS,
          payload: follower
        });
      });
  }
}
