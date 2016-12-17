import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './configureStore'


import OverlayContainer from './containers/overlay'

const store = configureStore();

class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

class NoMatch extends Component {
  render() {
    return (
      <div>404</div>
    )
  }
}

const AppRoutes = (
  <Route path="/" component={AppContainer}>
    <Route path=":channelID" component={OverlayContainer}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)

export default AppRoutes;
