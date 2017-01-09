
import React, { PropTypes, Component } from 'react'

import Banner from '../banner'
import BackgroundTransitionComponent from '../../utils/background-transition'

const BackgroundBanner = BackgroundTransitionComponent(Banner);

import './overlay.css'

export default class Overlay extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const { channelID } = this.props.params;
    const { query } = this.props.location;

    return (
      <div>
        <BackgroundBanner channelID={channelID} position={query["banner-position"]} />
      </div>
    );
  }
}
