import React from 'react';
import PropTypes from 'prop-types'
import './locationInfo.css'

export default function LocationInfo(props){
  const location = props.location
  return  (
    <div className="selection-info">
      <h1>{location.name}</h1>
      <p>Rating: {props.rating}</p>
      <p>Size: {location.hectare}</p>
      <p>{location.neighbourhoodname}</p>
      <p>Facilities: {location.facilities}</p>
      <p>Cross streets: {location.crossStreets}</p>
      <p>Washrooms: {location.washrooms}</p>
    </div>
  )
}

LocationInfo.propTypes = {
  location: PropTypes.oneOf([PropTypes.object, null]).isRequired,
  rating: PropTypes.number.isRequired
}
