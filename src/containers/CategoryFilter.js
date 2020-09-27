import React from 'react'
import { connect } from 'react-redux';

const CategoryFilter = (props) => {
  console.log(props)
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const catList = categories.map(cat => (
    <option key={Math.random()} value={cat}>
      {cat}
    </option>
  ));
  return (
    <select name="category">
      <option>
        {props.filter}
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