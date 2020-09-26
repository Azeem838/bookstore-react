import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  const bookList = books.map((book) => (
    <Book book={book} key={Math.random()} />
  ));
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {bookList}
    </table>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.objectOf,
};

BookList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BookList);
