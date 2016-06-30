import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Banner from './components/banner'
import Webcam from './components/webcam'

import './style.css'

class Page extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Webcam />
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDom.render(
  <Page />,
  root
);
