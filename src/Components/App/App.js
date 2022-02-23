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
    name: 'Stanley Park',
    type: 'forest',
    info: 'The world renowned park sits as the crown of downtown Vancouver',
    currentEvents: [],
    photos: '',
    amenities: [],
    hours: '9am-8pm',
    ratings: [4,3,3,5,5,5]
  },
  {
    id: generateId(),
    name: 'Sunset Beach',
    type: 'beach',
    info: 'Downtown Vancouver beach park known for its gorgeous sunsets',
    currentEvents: [],
    photos: '',
    amenities: [],
    hours: 'sunrise-sunset',
    ratings: [1,2,3,4,5,2]
  },
  {
    id: generateId(),
    name: 'Concord Pacific Park',
    type: 'enclosed area',
    info: 'An urban park with volleyball courts, lawn chairs, basketball courts and event spaces.',
    currentEvents: [],
    photos: '',
    amenities: [],
    hours: '8am-10pm',
    ratings: [5,5,5,5,3,5]
  },
  {
    id: generateId(),
    name: 'Coopers Park',
    type: 'mixed',
    info: 'A mixed green space located under the cambie bridge in downtown with a basketball court, ping pong table, and more.',
    currentEvents: [],
    photos: '',
    amenities: [],
    hours: '7am-10pm',
    ratings: [3,4,2,1,5,5]
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
      <p className="App-info">Welcome to the Street League! Here you'll find local parks and recreational areas in your city, as well as a people to connect with in your community.</p>
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
