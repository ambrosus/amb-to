import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withGoogleMap((props: any) =>
  <GoogleMap
  defaultZoom={10}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
)

export default Map;
