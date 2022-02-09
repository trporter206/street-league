import React from 'react';
import NavBar from '../NavBar/navBar.js'
import SearchBar from '../SearchBar/searchBar.js'
import LocationList from '../LocationList/locationList.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
    }
  }
  render() {
    return(
      <div className="App">
        <div className="App-navigation">
          <NavBar />
        </div>
        <p>Find local courts and play areas</p>
        <SearchBar />
        <div className="locations">
          <LocationList />
        </div>
      </div>
    )
  }
}

export default App;
