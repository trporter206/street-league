import React, {useState} from 'react';
import './searchBar.css'

export default function SearchBar(props) {
  const [term, setTerm] = useState('')
  const handleTermChange = (e) => {
    setTerm(e.target.value)
  }
  const [filter, setFilter] = useState(null)
  const handleFilterChange = (e) => {
    let newFilter = document.querySelector('input[name="search_filter"]:checked').value
    setFilter(newFilter);

  }
  const search = (e) => {
    e.preventDefault()
    props.onSearch(term, filter)
  }
  return (
    <div className='search-bar'>
      <form className='search'>
        <input type='search'
                placeholder='location'
                onChange={handleTermChange} />
        <button className="search-button"
                onClick={search}>Search</button>
      </form>
      <input type="radio"
             id="locations"
             name="search_filter"
             value="locations"
             onClick={handleFilterChange} />
      <label for="locations">Locations</label>
      <input type="radio"
             id="events"
             name="search_filter"
             value="events"
             onClick={handleFilterChange}/>
      <label for="events">Events</label>
    </div>
  )
}
