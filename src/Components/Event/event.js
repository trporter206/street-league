import React from 'react';
import './event.css'

export default function Event(props) {
  return (
    <div className="event" onClick={props.handleClick}>
      <h1>{props.event.name}</h1>
      <p>{props.event.type}</p>
    </div>
  )
}
