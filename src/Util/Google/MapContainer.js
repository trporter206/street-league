import React from 'react';
import ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map';

function MapContainer() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={"AIzaSyCirdtGsmjUM19VnhLURcB2T01J62C6e_4"} render={render}>
      <Map />
    </Wrapper>
  );
}

export default MapContainer;
