import React, { Component } from 'react'
import ReactDom from 'react-dom'

import CurrentSong from './current-song'

export default class Webcam extends Component {
  render() {
    return (
      <div className="webcam">
        <CurrentSong />
      </div>
    );
  }
}
