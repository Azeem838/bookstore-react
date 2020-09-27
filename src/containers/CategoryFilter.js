import React from 'react'
import { connect } from 'react-redux';

const CategoryFilter = ({ filter, handleFilter }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-fi',
  ];
  const catList = categories.map(cat => (
    <option key={Math.random()} value={cat}>
      {cat}
    </option>
  ));
  return (
    <select name="category" onChange={handleFilter} value={filter}>
      <option>
        {"All"}
      </option>
      {catList}
    </select>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}


export default connect(mapStateToProps)(CategoryFilter);