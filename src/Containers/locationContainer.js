import React from 'react';
import Location from '../Components/Location/location.js'

export default function LocationContainer(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.getInfo(props.location)
  }
  return <Location handleClick={handleClick}
                   location={props.location}/>

}
