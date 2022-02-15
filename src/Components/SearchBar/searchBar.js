import React, {useState} from 'react';
import './searchBar.css'

export default function SearchBar(props) {
  const [term, setTerm] = useState('')
  const search = (e) => {
    e.preventDefault()
    props.onSearch(term)
  }
  const handleTermChange = (e) => {
    setTerm(e.target.value)
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
    </div>
  )
}
