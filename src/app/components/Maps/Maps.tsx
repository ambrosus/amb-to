import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Maps.scss';

export default withScriptjs((withGoogleMap((props: any) =>
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: props.lat, lng: props.lng }} >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
)));
