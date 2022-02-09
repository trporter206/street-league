import React from 'react';
import SearchResults from '../SearchResults/searchResults.js'
import './location.css'

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <SearchResults />
      </div>
    )
  }
}

export default Location;
