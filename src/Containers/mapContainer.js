import React from 'react';
import Map from '../Components/Map/map.js'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function MapContainer() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return <Map />
}
