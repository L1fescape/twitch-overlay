import React, { Component } from 'react';

export default class SubscribersComponent extends Component {
  render() {
    return <div>Latest Subscriber: {this.props.latestSub.name}</div>
  }
}
