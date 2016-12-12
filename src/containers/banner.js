import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'

import Time from '../components/time'
import Subscribers from '../components/subscribers';
import Followers from '../components/followers';
import Lights from '../components/lights';

import { fetchLatestFollow } from '../actions/follow'

import './banner.css';

class Banner extends Component {
  state = {
    follower: {}
  }

  fetchLatestFollow = () => {
    this.props.dispatch(fetchLatestFollow("l1fescape"));
  }

  componentDidMount() {
    this.fetchLatestFollow()
    this.fetchInterval = setInterval(this.fetchLatestFollow, 10000);
  }

  componentDidUnmount() {
    clearInterval(this.fetchInterval);
  }

  render() {
    const { follower } = this.props;
    return (
      <div className="banner">
        <Followers latestFollower={follower} />
        <Lights />
        <Time />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const follower = state.follow.latest;
  return {
    follower
  };
}

export default connect(mapStateToProps)(Banner)
