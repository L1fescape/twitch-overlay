import React, { Component } from 'react';

export default class Lights extends Component {
  state = {
    user: "",
    lights: "off"
  }

  getLights = () => {
    return fetch("/api/lights")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          user: json.user,
          lights: json.lights
        })
      });
  }

  componentDidMount() {
    this.lightInterval = setInterval(this.getLights, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.lightInterval)
  }

  render() {
    const { user, lights } = this.state;
    let message = "";
    if (user) {
      message =  `${user} turned the christmas lights ${lights}`
    }

    return (
      <div className="lights">{message}</div>
    )
  }
}
