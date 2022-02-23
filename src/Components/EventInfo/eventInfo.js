import React from 'react';
import PropTypes from 'prop-types'
import './eventInfo.css'

export default function EventInfo(props){
  return (
    <div className="selection-info">
      <h1>{props.event.name}</h1>
      <p>{props.event.type}</p>
      <p>{props.location}</p>
    </div>
  )
}

EventInfo.propTypes = {
  event: PropTypes.oneOf([PropTypes.object, null]).isRequired,
  location: PropTypes.arrayOf(PropTypes.object).isRequired
}
