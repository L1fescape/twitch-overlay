import React, { Component } from 'react'
import ReactDom from 'react-dom'

import moment from 'moment'
import _ from 'lodash'

export default class Time extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  }

  componentDidMount() {
    setInterval(_.bind(function() {
      this.setState({
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
    }, this), 1000);
  }

  render() {
    return <span>{this.state.time}</span>;
  }
}
