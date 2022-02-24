import React from 'react';
import PropTypes from 'prop-types'
import './location.css'

export default function Location(props) {
  return (
    <div className="location" onClick={props.handleClick}>
      <h1>{props.location.name}</h1>
      <p>{props.location.neighbourhood}</p>
    </div>
  )
}

Location.propTypes = {
  location: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
