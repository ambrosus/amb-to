import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types'
import Place from './Place';

import config from 'app/config';

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
    // const places = this.props.places.map((p, i) => {
    //   return (
    //     <Place key={i}
    //       lat={p.lat}
    //       lng={p.lng}
    //     />
    //   )
    // });
    const places = this.props.places[0];
    console.log('places', places);


    return (
      //   <div className="Maps" style={{ height: this.props.height, width: this.props.width }}>
      //   <GoogleMapReact
      //     bootstrapURLKeys={{ key: config.MAPS_KEY }}
      //     defaultCenter={this.props.center}
      //     defaultZoom={this.props.zoom}
      //   >
      //   {places}
      //   </GoogleMapReact>
      // </div>

      <div className="Maps">
        <div className="item__event__more-details__row ">
          <div className="item__event__more-details__map ">
            <GoogleMap
              defaultZoom={10}
              maxZoom={10}
              defaultCenter={{ lat: places.lat, lng: places.lng }}
            >
            <Marker position={{ lat: places.lat, lng: places.lng }} />
            </GoogleMap>
            {/* <GoogleMapReact
              bootstrapURLKeys={{ key: config.MAPS_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              {places}
            </GoogleMapReact> */}
            {/* <agm-map [maxZoom]="10" [fitBounds]="fitBounds" [disableDefaultUI]="false" [zoomControl]="false" [streetViewControl]="false">

      <agm-polyline [strokeColor]="'#c7fe3e'" [strokeWeight]="'1'">
        <agm-polyline-point *ngFor="let pin of pins; let i = index" [latitude]="pin.lat" [longitude]="pin.lng">
        </agm-polyline-point>
      </agm-polyline>

      <agm-marker *ngFor="let pin of pins; let i = index" [latitude]="pin.lat" [longitude]="pin.lng"></agm-marker>

    </agm-map> */}
          </div>
        </div>
      </div>
    )
  }
}

export default withGoogleMap(Maps);
