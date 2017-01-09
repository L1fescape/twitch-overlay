import React, { PropTypes, Component } from 'react'
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

  static propTypes = {
    channelID: PropTypes.string.isRequired
  }

  fetchLatestFollow = () => {
    this.props.dispatch(fetchLatestFollow(this.props.channelID));
  }

  componentDidMount() {
    this.fetchLatestFollow()
    this.fetchInterval = setInterval(this.fetchLatestFollow, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchInterval);
  }

  render() {
    const { follower, position } = this.props;
    let style = {
      bottom: 0
    }

    if (position === "top") {
      style = {
        top: 0
      }
    }

    return (
      <div className="banner" style={style}>
        <Followers latestFollower={follower} />
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
