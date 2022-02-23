import React from 'react';
import EventInfo from '../Components/EventInfo/eventInfo.js'

export default function EventInfoContainer(props){
  const getLocation = (id) => {
    for (var i= 0; i < props.locations.length; i++) {
      if (id === props.locations[i]['id']){
        return props.locations[i].name
      }
    }
  }

  return  <EventInfo event={props.event}
                     location={getLocation(props.event.location)}/>
}
