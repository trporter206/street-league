import React from 'react';
import Location from '../Location/location.js'
import './searchResults.css'

export default function SearchResults(props) {
  if (props.locations.length === 0) {
    return <p>Try a new search!</p>
  }

  return (
    <div className="search-results">
    {props.locations.map(location => <Location location={location}
                                               key={location}
                                               getInfo={props.getInfo}/>)}
    </div>
  )
}
