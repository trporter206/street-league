import React from 'react';
import './searchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.search = this.search.bind(this)
  }
  search(){
    this.props.onSearch(this.state.term)
  }
  handleTermChange(e){
    this.setState({ term: e.target.value })
  }
  render() {
    return (
      <div className='search-bar'>
        <form className='search'>
          <input type='search'
                 placeholder='location'
                 onChange={this.handleTermChange} />
          <button className="search-button"
                  onClick={this.search}>Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar
