import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Time from '../components/time'
import Subscribers from '../containers/subscribers';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Subscribers recent />
        <Time />
      </div>
    );
  }
}
