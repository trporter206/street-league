import React from 'react';
import './searchBar.css'

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar'>
        <form className='search'>
          <input type='search' placeholder='location' />
          <button className="search-button">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
