import React from 'react';
import SearchResults from '../SearchResults/searchResults.js'
import PropTypes from 'prop-types'
import './resultList.css'

export default function ResultList(props) {
  return (
    <div className="result-list">
      <h3>List of results</h3>
      <SearchResults results={props.searchResults}
                     getInfo={props.selectionInfo}
                     filter={props.filter}/>
    </div>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.array,
  selectionInfo: PropTypes.func.isRequired,
  filter: PropTypes.oneOf(['locations', 'events'])
}
