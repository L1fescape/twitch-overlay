import React, { Component } from 'react'
import { connect } from 'react-redux';

import { hideNotification } from '../actions/notification';

class Notifications extends Component {
  onNotificationHide = () => {
    this.props.dispatch(hideNotification());
  }

  componentWillUpdate(nextProps) {
    setTimeout(this.onNotificationHide, 1000);
  }

  render() {
    return (
      <div className="overlay">
        { this.props.isOpen &&
          <div className="notification">
            {this.props.message}
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.notifications;
}

export default connect(mapStateToProps)(Notifications);
