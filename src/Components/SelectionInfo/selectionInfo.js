import React from 'react';
import './selectionInfo.css'

export default function SelectionInfo(props){
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
