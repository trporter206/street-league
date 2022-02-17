import React, {useState} from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBar from '../SearchBar/searchBar.js'
import LocationList from '../LocationList/locationList.js'
import LocationInfo from '../LocationInfo/locationInfo.js'
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

export default function App() {

  const [searchResults, setSearchResults] = useState([])
  const search = (term) => {
    let results = []
    for(var i=0; i<testLocations.length; i++) {
      for (var key in testLocations[i]) {
        if(testLocations[i][key].indexOf(term) !== -1) {
          if (!results.includes(testLocations[i])){
            results.push(testLocations[i]);
          }
        }
      }
    }
    setSearchResults(results)
  }

  const [currentLocation, setCurrentLocation] = useState(null)
  const getInfo = (location) => {
    setCurrentLocation(location)
  }

  return(
    <div className="App">
      <div className="App-navigation">
        <NavBar />
      </div>
      <p>Find local courts and play areas</p>
      <SearchBar onSearch={search}/>
      <div className="locations">
        <LocationList searchResults={searchResults}
                      locationInfo={getInfo}/>
        <LocationInfo location={currentLocation}/>
      </div>
    </div>
  )
}
