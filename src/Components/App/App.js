import React from 'react';
import NavBar from '../NavBar/navBar.js'
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <div className="App-navigation">
          <NavBar />
        </div>
        <p>Find local courts and play areas</p>
      </div>
    )
  }
}

export default App;
