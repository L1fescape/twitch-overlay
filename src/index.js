console.log('lmao');

import React, { Component } from 'react'
import ReactDom from 'react-dom'

class Page extends Component {
  render() {
    return (
      <div className="banner">
        <h2>Hello! Welcome to L1fescape's stream!</h2>
      </div>
    );
  }
}

const root = document.getElementById('app');

ReactDom.render(
  <Page />,
  root
);
