import React, { PropTypes, Component } from 'react'
import ReactDom from 'react-dom'

import 'styles/base.scss'
import 'bootstrap/dist/css/bootstrap.css'


export default class Home extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username: "",
        bannerPosition: "top"
      };
    }

  updateUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleRadioClick = (e) => {
    this.setState({
      bannerPosition: e.target.value
    });
  }

  render() {
    const { username, bannerPosition } = this.state;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Twitch Overlay</h1>
        </div>
        <form className="form-horizontal" action={username}>
          <div className="form-group">
            <label className="col-sm-3 control-label">Twitch Username</label>
            <div className="col-sm-9">
              <input required="true" type="text" className="form-control" id="username" onChange={this.updateUsername} placeholder="Username" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Banner Position</label>
            <div className="col-sm-9">
              <div className="btn-group" data-toggle="buttons">
                <label className={`btn btn-primary ${bannerPosition === "top" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="banner-position"
                    onChange={this.handleRadioClick}

                    value="top"
                    checked={bannerPosition === "top"}
                    /> Top
                </label>
                <label className={`btn btn-primary ${bannerPosition === "bottom" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="banner-position"
                    onChange={this.handleRadioClick}
                    value="bottom"
                    checked={bannerPosition === "bottom"}
                    /> Bottom
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" ref="submit" className="btn btn-default">Generate Overlay</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
