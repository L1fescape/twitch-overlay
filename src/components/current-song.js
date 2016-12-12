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
    var request = new Request('/api/v1/list');

    return fetch(request)
      .then(resp => resp.json())
      .then(this.parseResp.bind(this))
      .catch(this.stopFetching.bind(this))
  }

  parseResp = (resp) => {
    var track = resp[resp.length - 1];
    this.setState({
      artist: track.artist,
      track: track.title
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
