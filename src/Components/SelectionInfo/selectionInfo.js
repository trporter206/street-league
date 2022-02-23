import React from 'react';
import PropTypes from 'prop-types'
import './selectionInfo.css'

export default function SelectionInfo(props){
  if(props.type === 'locations') {
    return  (
      <div className="selection-info">
        <h1>{props.selection.name}</h1>
        <p>Rating: {props.rating}</p>
        <p>{props.selection.info}</p>
      </div>
    )
  } else {
    return (
      <div className="selection-info">
        <h1>{props.selection.name}</h1>
        <p>{props.selection.type}</p>
        <p>{props.location}</p>
      </div>
    )
  }
}

SelectionInfo.propTypes = {
  selection: PropTypes.oneOf([PropTypes.object, null]).isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired
}
