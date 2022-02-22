import React, {useState} from 'react';
import SearchBar from '../Components/SearchBar/searchBar.js'

export default function SearchBarContainer(props) {
  const [term, setTerm] = useState('')
  const handleTermChange = (e) => {
    setTerm(e.target.value)
  }
  const [filter, setFilter] = useState(null)
  const handleFilterChange = (e) => {
    let newFilter = document.querySelector('input[name="search_filter"]:checked').value
    setFilter(newFilter);
    props.getInfo(null)

  }
  const search = (e) => {
    e.preventDefault()
    props.onSearch(term, filter)
  }
  return <SearchBar handleTermChange={handleTermChange}
                    search={search}
                    handleFilterChange={handleFilterChange}/>
}
