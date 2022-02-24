import React, {useState} from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBarContainer from '../../Containers/searchBarContainer.js'
import ResultList from '../ResultList/resultList.js'
import SelectionInfoContainer from '../../Containers/selectionInfoContainer.js'
import parks from '../../Data/parks.json'
import './App.css';

let idCollection = []

function generateId() {
  let id = Math.floor(Math.random() * 1000)
  while(idCollection.includes(id)){
    id = Math.floor(Math.random() * 1000)
  }
  return id
}

const parksData = parks.map((park) => {
  return {
    id: generateId(),
    name: park.fields.name,
    currentEvents: [],
    photos: '',
    amenities: [],
    ratings: [3,4,2,1,5,5],
    hectare: park.fields.hectare,
    neighbourhood: park.fields.neighbourhoodname,
    facilities: park.fields.facilities,
    crossStreets: [park.fields.ewstreet, park.fields.nsstreet],
    street: park.fields.streetname,
    streetNumber: park.fields.streetnumber,
    washrooms: park.fields.washrooms
  }
})

const testEvents = [
  {
    name: 'looking for new runners',
    type: 'running group',
    info: 'come join some new to town runners!'
  },
  {
    name: 'day at the beach',
    type: 'spikeball',
    info: 'looking for more spikeball players'
  },
  {
    name: 'street ballers',
    type: 'basketball',
    info: 'lets do a pick-up game'
  },
  {
    name: 'advanced training',
    type: 'running group',
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
      data = parksData
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
      <div className="App-info">
      <p className="App-info">Welcome to the Street League! Here you'll find local parks and recreational areas in your city, as well as a people to connect with in your community.</p>
      </div>
      <div className="App-search">
      <SearchBarContainer onSearch={search}
                          getInfo={getInfo}/>
      </div>
      <div className="results">
        <ResultList searchResults={searchResults}
                    selectionInfo={getInfo}
                    filter={filterType}/>
      </div>
      <div className="results-info">
        <SelectionInfoContainer selection={currentSelection}
                                type={filterType}/>
      </div>
    </div>
  )
}
