import React, {useState} from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBar from '../SearchBar/searchBar.js'
import ResultList from '../ResultList/resultList.js'
import SelectionInfo from '../SelectionInfo/selectionInfo.js'
import './App.css';

let testLocations = [
  {
    name: 'stanley',
    type: 'forest',
    info: 'a beautiful forested park'
  },
  {
    name: 'sunset',
    type: 'beach',
    info: 'a beautiful beach park'
  },
  {
    name: 'concord',
    type: 'court',
    info: 'a popular park'
  },
  {
    name: 'bridge',
    type: 'court',
    info: 'a less popular park'
  }
]
let testEvents = [
  {
    name: 'looking for new runners',
    type: 'running group',
    location: 'park',
    info: 'come join some new to town runners!'
  },
  {
    name: 'day at the beach',
    type: 'spikeball',
    location: 'beach',
    info: 'looking for more spikeball players'
  },
  {
    name: 'street ballers',
    type: 'basketball',
    location: 'court',
    info: 'lets do a pick-up game'
  },
  {
    name: 'advanced training',
    type: 'running group',
    location: 'neighborhood',
    info: 'advanced runners training for marathon'
  }
]

export default function App() {

  const [searchResults, setSearchResults] = useState([])
  const [filterType, setFilterType] = useState(null)
  const search = (term, filter) => {
    let results = []
    let data
    if(filter === 'locations' || filter === null){
      data = testLocations
      setFilterType('locations')
    } else {
      data = testEvents
      setFilterType('events')
    }
    for(var i=0; i<data.length; i++) {
      for (var key in data[i]) {
        if(data[i][key].indexOf(term) !== -1) {
          if (!results.includes(data[i])){
            results.push(data[i]);
          }
        }
      }
    }
    setSearchResults(results)
  }

  const [currentSelection, setCurrentSelection] = useState(null)
  const getInfo = (selection) => {
    setCurrentSelection(selection)
  }

  return(
    <div className="App">
      <div className="App-navigation">
        <NavBar />
      </div>
      <p>Find local courts and play areas</p>
      <SearchBar onSearch={search}/>
      <div className="results">
        <ResultList searchResults={searchResults}
                      selectionInfo={getInfo}
                      filter={filterType}/>
        <SelectionInfo selection={currentSelection}
                       type={filterType}/>
      </div>
    </div>
  )
}
