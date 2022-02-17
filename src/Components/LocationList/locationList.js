import React from 'react';
import SearchResults from '../SearchResults/searchResults.js'
import './locationList.css'

export default function LocatonList(props) {
  return (
    <div className="location-list">
      <h3>List of locations</h3>
      <SearchResults locations={props.searchResults}
                     getInfo={props.locationInfo}/>
    </div>
  )
}
