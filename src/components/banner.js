import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Time from './time'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <marquee><h2>Hello! Welcome to L1fescape's stream! :D It's currently <Time /></h2></marquee>
      </div>
    );
  }
}
