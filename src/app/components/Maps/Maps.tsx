import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Maps.scss';

const Maps = withGoogleMap((props: any) =>
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: props.lat, lng: props.lng }} >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
);

export default Maps;
