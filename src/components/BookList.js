import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBook } from '../actions/index';

class BookList extends Component {
  removeBook = (id) => {
    this.props.removeBook(id);
  };

  render() {
    console.log(this.props.books);

    const bookList = this.props.books.map((book) => (
      <Book removeBook={this.removeBook} book={book} key={Math.random()} />
    ));
    return (
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
        {bookList}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (id) => {
      dispatch(removeBook(id));
    },
  };
};

BookList.propTypes = {
  books: PropTypes.objectOf,
};

BookList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
