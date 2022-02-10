import React from 'react';
import './location.css'

class Location extends React.Component {
  render() {
    return (
      <div className="location">
        <h1>{this.props.location.name}</h1>
        <p>{this.props.location.type}</p>
      </div>
    )
  }
}

export default Location;
