import React from 'react';
import Location from '../Location/location.js'
import './searchResults.css'

export default function SearchResults(props) {
  return (
    <div className="search-results">
    {props.locations.map(location => <Location location={location}
                                               key={location}/>)}
    </div>
  )
}
