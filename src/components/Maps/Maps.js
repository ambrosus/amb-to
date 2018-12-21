import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types'
import Place from './Place';

import { MAPS_KEY } from 'constants';

import './style.scss';

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    width: '100%',
    height: '100vh',
    places: []
  }
  static propTypes = {}

  render() {
    const places = this.props.places.map((p) => {
      return (
        <Place
        lat={p.lat}
        lng={p.lng}
        text={p.text}
      />
      )
    });

    return (
      <div className="maps" style={{ height: this.props.height, width: this.props.width }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_KEY }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      {places}
      </GoogleMapReact>
    </div>
    )
  }
}

export default Maps
