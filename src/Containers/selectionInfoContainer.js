import React from 'react';
import SelectionInfo from '../Components/SelectionInfo/selectionInfo.js'

export default function SelectionInfoContainer(props){
  if (props.selection === null){
    return (
      <p style={{textAlign: 'center'}}>selection info will appear here</p>
    )
  }
  const getAverageRating = (ratings) => {
    return (ratings.reduce((a,b) => (a+b)) / ratings.length).toFixed(1)
  }
  const getLocation = (id) => {
    for (var i= 0; i < props.locations.length; i++) {
      if (id === props.locations[i]['id']){
        return props.locations[i].name
      }
    }
  }

  if(props.type === 'locations') {
    return  <SelectionInfo type={props.type}
                           selection={props.selection}
                           rating={getAverageRating(props.selection.ratings)}/>
  } else {
    return <SelectionInfo type={props.type}
                          selection={props.selection}
                          location={getLocation(props.selection.location)}/>
  }
}
