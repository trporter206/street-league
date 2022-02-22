import React, {useState} from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBarContainer from '../../Containers/searchBarContainer.js'
import ResultList from '../ResultList/resultList.js'
import SelectionInfo from '../SelectionInfo/selectionInfo.js'
import './App.css';

let idCollection = []
function generateId() {
  let id = Math.floor(Math.random() * 1000)
  while(idCollection.includes(id)){
    id = Math.floor(Math.random() * 1000)
  }
  return id
}
const testLocations = [
  {
    id: generateId(),
    name: 'stanley',
    type: 'forest',
    info: 'a beautiful forested park',
    currentEvents: []
  },
  {
    id: generateId(),
    name: 'sunset',
    type: 'beach',
    info: 'a beautiful beach park',
    currentEvents: []
  },
  {
    id: generateId(),
    name: 'concord',
    type: 'court',
    info: 'a popular park',
    currentEvents: []
  },
  {
    id: generateId(),
    name: 'bridge',
    type: 'court',
    info: 'a less popular park',
    currentEvents: []
  }
]
const testEvents = [
  {
    name: 'looking for new runners',
    type: 'running group',
    location: testLocations[0]['id'],
    info: 'come join some new to town runners!'
  },
  {
    name: 'day at the beach',
    type: 'spikeball',
    location: testLocations[1]['id'],
    info: 'looking for more spikeball players'
  },
  {
    name: 'street ballers',
    type: 'basketball',
    location: testLocations[2]['id'],
    info: 'lets do a pick-up game'
  },
  {
    name: 'advanced training',
    type: 'running group',
    location: testLocations[3]['id'],
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
      let value = JSON.stringify(data[i])
      if (value.includes(term)) {
        results.push(data[i])
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
      <SearchBarContainer onSearch={search}
                          getInfo={getInfo}/>
      <div className="results">
        <ResultList searchResults={searchResults}
                    selectionInfo={getInfo}
                    filter={filterType}/>
        <SelectionInfo selection={currentSelection}
                       type={filterType}
                       locations={testLocations}/>
      </div>
    </div>
  )
}
