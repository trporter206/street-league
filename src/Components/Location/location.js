import React from 'react';
import './location.css'

export default function Location(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.getInfo(props.location)
  }
  return (
    <div className="location" onClick={handleClick}>
      <h1>{props.location.name}</h1>
      <p>{props.location.type}</p>
    </div>
  )
}
