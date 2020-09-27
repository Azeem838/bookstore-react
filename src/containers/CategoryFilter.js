import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <option>All</option>
      {catList}
    </select>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
