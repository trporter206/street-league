import React from 'react';
import './selectionInfo.css'

export default function SelectionInfo(props){
  if (props.selection === null){
    return (
      <p style={{textAlign: 'center'}}>selection info will appear here</p>
    )
  }
  if(props.type === 'location') {
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
        <p>{props.selection.location}</p>
        <p>{props.selection.info}</p>
      </div>
    )
  }
}
