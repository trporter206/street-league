import React from 'react';
import Location from '../Location/location.js'
import './searchResults.css'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="search-results">
      {this.props.locations.map(location => <Location location={location}
                                                      key={location}/>)}
      </div>
    )
  }
}

export default SearchResults;
