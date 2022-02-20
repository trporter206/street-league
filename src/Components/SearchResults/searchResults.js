import React from 'react';
import Location from '../Location/location.js'
import Event from '../Event/event.js'
import './searchResults.css'

export default function SearchResults(props) {
  if (props.results.length === 0) {
    return <p>Try a new search!</p>
  }
  if(props.filter === 'locations'){
    return (
      <div className="search-results">
      {props.results.map(location => <Location location={location}
                                                 key={location}
                                                 getInfo={props.getInfo}/>)}
      </div>
    )
  } else {
    return (
      <div className="search-results">
      {props.results.map(e => <Event event={e}
                                     key={e}
                                     getInfo={props.getInfo}/>)}
      </div>
    )
  }
}
