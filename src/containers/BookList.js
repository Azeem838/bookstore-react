import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/nav.css';
import Book from '../components/Book';
import { changeFilter, removeBook, getBooks } from '../actions/index';
import CategoryFilter from './CategoryFilter';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.removeBook = this.removeBook.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    fetch('http://localhost:3000/api/v1/books')
      .then((response) => response.json())
      .then((data) => {
        this.props.getBooks(data);
      });
  }

  removeBook(id) {
    const { removeBook } = this.props;
    removeBook(id);
    const deleteURL = `http://localhost:3000/api/v1/books/${id}`;
    fetch(deleteURL, {
      method: 'DELETE',
    });
  }

  handleFilter(e) {
    const { changeFilter } = this.props;
    changeFilter(e.target.value);
  }

  render() {
    const { books, filter } = this.props;
    let bookList;

    if (filter === 'All') {
      bookList = books.map((book) => (
        <Book removeBook={this.removeBook} book={book} key={book.id} />
      ));
    } else {
      bookList = books
        .filter((book) => book.category === filter)
        .map((book) => (
          <Book removeBook={this.removeBook} book={book} key={book.id} />
        ));
    }

    if (!bookList.length) {
      bookList = <div className="no-books">No Books in this Category</div>;
    }

    return (
      <div className="main-container">
        <div className="nav-container">
          <div className="logo">Magic-Books Inc.</div>
          <div className="books">Books</div>
          <div className="categories">
            <CategoryFilter handleFilter={this.handleFilter} />
          </div>
          <div className="avatar">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => {
    dispatch(removeBook(id));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
  getBooks: (books) => {
    dispatch(getBooks(books));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

BookList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
