import React from 'react';
import './location.css'

export default function Location(props) {
  return (
    <div className="location">
      <h1>{props.location.name}</h1>
      <p>{props.location.type}</p>
    </div>
  )
}
