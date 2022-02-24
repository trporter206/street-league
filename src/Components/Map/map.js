import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map(){
  const center = {lat: 59.95, lng: 30.33}
  const zoom = 11

  return (
      // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCirdtGsmjUM19VnhLURcB2T01J62C6e_4" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  );
}
