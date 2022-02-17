import React from 'react';
import './locationInfo.css'

export default function LocationInfo(props){
  if (props.location === null){
    return (
      <p>location info will appear here</p>
    )
  }
  return  (
    <div className="location-info">
      <h1>{props.location.name}</h1>
      <p>{props.location.info}</p>
    </div>
  )
}
