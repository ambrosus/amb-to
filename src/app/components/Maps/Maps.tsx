import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../config';

import './style.scss';

class Maps extends Component<any, any> {

  public render() {
    return (
      <div className='maps' style={{height: this.props.height, width: this.props.width}} >
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.MAPS_KEY }}
        defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
        defaultZoom={10}
      >
      {/* {places} */}
      </GoogleMapReact>
    </div>
    );
  }
}

export default Maps;
