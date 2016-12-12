import React, { Component } from 'react';

export default class FollowersComponent extends Component {
  render() {
    return (
      <div className="follow">
        Latest Follower: {this.props.latestFollower.name}
      </div>
    )
  }
}
