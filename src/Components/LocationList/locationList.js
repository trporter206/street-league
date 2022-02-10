import React from 'react';
import SearchResults from '../SearchResults/searchResults.js'
import './locationList.css'

class LocationList extends React.Component {
  render() {
    return (
      <div className="location-list">
        <h3>List of locations</h3>
        <SearchResults locations={this.props.searchResults}/>
      </div>
    )
  }
}

export default LocationList;
