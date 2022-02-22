import React from 'react';
import PropTypes from 'prop-types'
import './event.css'

export default function Event(props) {
  return (
    <div className="event" onClick={props.handleClick}>
      <h1>{props.event.name}</h1>
      <p>{props.event.type}</p>
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
