import React from 'react';
import LocationInfoContainer from '../Containers/locationInfoContainer.js'
import EventInfoContainer from '../Containers/eventInfoContainer.js'

export default function SelectionInfoContainer(props){
  if (props.selection === null){
    return (
      <p style={{textAlign: 'center'}}>selection info will appear here</p>
    )
  }
  if(props.type === 'locations') {
    return  <LocationInfoContainer type={props.type}
                                   location={props.selection}/>
  } else {
    return <EventInfoContainer type={props.type}
                               event={props.selection}
                               locations={props.locations}/>
  }
}
