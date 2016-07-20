import React, { Component } from 'react';
import { connect } from 'react-redux'

import SubscribersComponent from '../components/subscribers';

import { fetchLatestSub } from '../actions/subscriber';
import { showNotification } from '../actions/notification';

const user = 'L1fescape';

class SubscribersContainer extends Component {
  fetchLatestSub = () => {
    this.props.dispatch(fetchLatestSub(user));
  }

  componentDidMount() {
    this.fetchLatestSub();
    this.interval = setInterval(this.fetchLatestSub, 10000);
  }

  componentWillUpdate(nextProps) {
    var latestSub = nextProps.latestSub;
    if (this.props.latestSub._id !== latestSub._id) {
      this.props.dispatch(showNotification('subscriber', latestSub));
    }
  }

  render() {
    const { latestSub } = this.props;
    return (
      <SubscribersComponent latestSub={latestSub}/>
    );
  }
}

function mapStateToProps(state) {
  const { latestSub } = state.subscribers;

  return {
    latestSub
  }
}

export default connect(mapStateToProps)(SubscribersContainer)
