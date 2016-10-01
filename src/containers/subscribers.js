import React, { Component } from 'react';
import { connect } from 'react-redux'

import SubscribersComponent from '../components/subscribers';

import { fetchLatestSub } from '../actions/subscriber';
import { showNotification } from '../actions/notification';

import Sound from 'react-sound'

const user = 'L1fescape';

class SubscribersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

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
      this.setState({
        playing: true
      });
      this.props.dispatch(showNotification('subscriber', latestSub));
    }
  }

  handleSongFinishedPlaying = () => {
    this.setState({
      playing: false
    });
  }

  render() {
    const { latestSub } = this.props;
    return (
      <div>
        <SubscribersComponent latestSub={latestSub}/>
        <Sound
          url="cool_sound.mp3"
          playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
          onFinishedPlaying={this.handleSongFinishedPlaying} />
      </div>
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
