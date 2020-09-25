import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <td>{books[0].id}</td>
      <td>{books[0].title}</td>
      <td>{books[0].category}</td>
    </tr>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps)(BookList);
