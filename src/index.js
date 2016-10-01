import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import Banner from './containers/banner'
import Webcam from './components/webcam'
import Notifications from './containers/notifications';

const store = configureStore();

/* import './civ.css' */
import './styles/overwatch.css'

class Page extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Banner />
          <Notifications />
          <Webcam />
        </div>
      </Provider>
    );
  }
}

const root = document.getElementById('app');

ReactDom.render(
  <Page />,
  root
);
