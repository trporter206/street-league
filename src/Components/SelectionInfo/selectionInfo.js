import React from 'react';
import PropTypes from 'prop-types'
import './selectionInfo.css'

export default function SelectionInfo(props){
  const getAverageRating = (ratings) => {
    return (ratings.reduce((a,b) => (a+b)) / ratings.length).toFixed(1)
  }
  if (props.selection === null){
    return (
      <p style={{textAlign: 'center'}}>selection info will appear here</p>
    )
  }
  const getLocation = (id) => {
    for (var i= 0; i < props.locations.length; i++) {
      if (id === props.locations[i]['id']){
        return props.locations[i].name
      }
    }
  }

  if(props.type === 'locations') {
    return  (
      <div className="selection-info">
        <h1>{props.selection.name}</h1>
        <p>Rating: {getAverageRating(props.selection.ratings)}</p>
        <p>{props.selection.info}</p>
      </div>
    )
  } else {
    return (
      <div className="selection-info">
        <h1>{props.selection.name}</h1>
        <p>{props.selection.type}</p>
        <p>{getLocation(props.selection.location)}</p>
      </div>
    )
  }
}

SelectionInfo.propTypes = {
  selection: PropTypes.oneOf([PropTypes.object, null]).isRequired,
  locations: PropTypes.arrayOf(PropTypes.object).isRequired
}
