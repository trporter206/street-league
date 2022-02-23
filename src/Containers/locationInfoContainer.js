import React from 'react';
import LocationInfo from '../Components/LocationInfo/locationInfo.js'

export default function LocationInfoContainer(props){
  const getAverageRating = (ratings) => {
    return (ratings.reduce((a,b) => (a+b)) / ratings.length).toFixed(1)
  }

  return  <LocationInfo location={props.location}
                        rating={getAverageRating(props.location.ratings)}/>
}
