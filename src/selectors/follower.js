
export function latestFollowSelector(json) {
  var follower = {};

  console.log(json)
  if (json.follows && json.follows.length) {
    follower = json.follows[0].user;
  }

  return follower;
}
