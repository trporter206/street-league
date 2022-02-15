import React, {useState} from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBar from '../SearchBar/searchBar.js'
import LocationList from '../LocationList/locationList.js'
import './App.css';

let testLocations = [
  {
    name: 'stanley',
    type: 'forest'
  },
  {
    name: 'sunset',
    type: 'beach'
  },
  {
    name: 'concord',
    type: 'court'
  }
]

export default function App() {
  const [searchResults, setSearchResults] = useState([])
  const search = (term) => {
    let results = []
    for (let i = 0; i < testLocations.length; i++) {
      if (term === testLocations[i]['name']) {
        results.push(testLocations[i])
      }
    }
    setSearchResults(results)
  }
  return(
    <div className="App">
      <div className="App-navigation">
        <NavBar />
      </div>
      <p>Find local courts and play areas</p>
      <SearchBar onSearch={search}/>
      <div className="locations">
        <LocationList searchResults={searchResults}/>
      </div>
    </div>
  )
}
