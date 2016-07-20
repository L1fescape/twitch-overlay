
export function latestSubSelector(json) {
  var follower = {};
  if (json.follows && json.follows.length) {
    follower = json.follows[0].user;
  }

  return follower;
}

