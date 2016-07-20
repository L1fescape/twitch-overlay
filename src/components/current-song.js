import React, { Component } from 'react'
import ReactDom from 'react-dom'

import moment from 'moment'
import _ from 'lodash'

const initialState = {
  artist: '',
  track: ''
}

export default class CurrentSong extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  fetchCurrentSong = () => {
    var request = new Request('/api/current');

    return fetch(request)
      .then(resp => resp.json())
      .then(this.parseResp.bind(this))
      .catch(this.stopFetching.bind(this))
  }

  parseResp = (resp) => {
    this.setState({
      artist: resp.artist,
      track: resp.track
    })
  }

  stopFetching = () => {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchCurrentSong, 1000);
  }

  render() {
    let { artist, track } = this.state;
    return <div className="current-song">{artist} - {track}</div>;
  }
}
