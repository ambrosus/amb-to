import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withGoogleMap((props: any) =>
  <GoogleMap
  defaultZoom={10}
    defaultCenter={{ lat: props.places[0].lat, lng: props.places[0].lng }}
  >
    <Marker position={{ lat: props.places[0].lat, lng: props.places[0].lng }} />
  </GoogleMap>
)

export default Map;
