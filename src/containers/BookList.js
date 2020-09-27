import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);
  }

  removeBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books } = this.props;

    const bookList = books.map(book => (
      <Book removeBook={this.removeBook} book={book} key={Math.random()} />
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

BookList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
