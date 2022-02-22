import React from 'react';
import LocationContainer from '../../Containers/locationContainer.js'
import EventContainer from '../../Containers/eventContainer.js'
import PropTypes from 'prop-types'
import './searchResults.css'

export default function SearchResults(props) {
  if (props.results.length === 0) {
    props.getInfo(null)
    return <p>Try a new search!</p>
  }
  if(props.filter === 'locations'){
    return (
      <div className="search-results">
      {props.results.map(location => <LocationContainer location={location}
                                                        key={location}
                                                        getInfo={props.getInfo}/>)}
      </div>
    )
  } else {
    return (
      <div className="search-results">
      {props.results.map(e => <EventContainer event={e}
                                              key={e}
                                              getInfo={props.getInfo}/>)}
      </div>
    )
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
}
