import React from 'react';
import PropTypes from 'prop-types'
import './locationInfo.css'

export default function LocationInfo(props){
  return  (
    <div className="selection-info">
      <h1>{props.location.name}</h1>
      <p>Rating: {props.rating}</p>
      <p>{props.location.info}</p>
    </div>
  )
}

LocationInfo.propTypes = {
  location: PropTypes.oneOf([PropTypes.object, null]).isRequired,
  rating: PropTypes.number.isRequired
}
