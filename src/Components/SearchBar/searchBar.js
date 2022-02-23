import React, {useState} from 'react';
import PropTypes from 'prop-types'
import './searchBar.css'

export default function SearchBar(props) {
  return (
    <div className='search-bar'>
      <form className='search'>
        <input type='search'
                placeholder='location'
                onChange={props.handleTermChange} />
        <button className="search-button"
                onClick={props.search}>Search</button>
      </form>
      <input type="radio"
             id="locations"
             name="search_filter"
             value="locations"
             onClick={props.handleFilterChange} />
      <label for="locations" style={{color: 'white'}}>Locations</label>
      <input type="radio"
             id="events"
             name="search_filter"
             value="events"
             onClick={props.handleFilterChange}/>
      <label for="events" style={{color: 'white'}}>Events</label>
    </div>
  )
}

SearchBar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleTermChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
}
