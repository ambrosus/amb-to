/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
import './Maps.scss';

const Maps = withScriptjs(withGoogleMap((props: any) =>
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: props.lat, lng: props.lng }} >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

export default Maps;
