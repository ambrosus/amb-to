import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types'
import Place from './Place';

import config from 'app/config';

import './style.scss';

class Maps extends Component {

  render() {
    return (
      <div className="maps" style={{ height: this.props.height, width: this.props.width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.MAPS_KEY }}
        defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
        defaultZoom={10}
        maxZoom={10}
      >
      {/* {places} */}
      </GoogleMapReact>
    </div>
    )
  }
}

export default Maps
