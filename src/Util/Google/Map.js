import React from 'react';
import ReactDom from "react-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Map: React.FC<{}> = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return <div ref={ref} />
};

export default Map;
