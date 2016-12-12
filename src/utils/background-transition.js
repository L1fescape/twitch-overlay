import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default function backgroundTransition(WrappedComponent) {
  return React.createClass({
    changeBackground: function() {
      ReactDOM.findDOMNode(this).children[0].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    },

    componentDidMount: function() {
      this.changeBackground();
      this.changeBg = setInterval(this.changeBackground, 5000);
    },

    componentDidUnmount: function() {
      clearInterval(this.changeBg);
    },

    render: function() {
      return (
        <div className="background-transition">
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  });
}
