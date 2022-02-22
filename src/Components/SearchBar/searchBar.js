import React, {useState} from 'react';
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
      <label for="locations">Locations</label>
      <input type="radio"
             id="events"
             name="search_filter"
             value="events"
             onClick={props.handleFilterChange}/>
      <label for="events">Events</label>
    </div>
  )
}
