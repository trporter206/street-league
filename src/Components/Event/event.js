import React from 'react';
import './event.css'

export default function Event(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.getInfo(props.event)
  }
  return (
    <div className="event" onClick={handleClick}>
      <h1>{props.event.name}</h1>
      <p>{props.event.type}</p>
    </div>
  )
}
