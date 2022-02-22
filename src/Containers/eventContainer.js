import React from 'react';
import Event from '../Components/Event/event.js'

export default function EventContainer(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.getInfo(props.event)
  }
  return <Event handleClick={handleClick}
                event={props.event}/>
}
