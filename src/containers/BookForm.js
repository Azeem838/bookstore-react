import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/form.css';
import { createBook } from '../actions/index';
import categories from '../constants/categories';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmit(e.target);
    e.target.reset();
  }

  async formSubmit(formData) {
    const { createBook } = this.props;
    const data = new FormData(formData);
    await fetch('http://localhost:3000/api/v1/books', {
      method: 'POST',
      mode: 'cors',
      'Content-Type': 'application/json',
      Accept: 'application/json',
      body: data,
    })
      .then((response) => response.json())
      .then((r) => createBook(r));
  }

  render() {
    const catList = categories.map((cat) => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));
    const { category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>ADD NEW BOOK</h3>
        <div className="form-elements">
          <input
            name="book[title]"
            type="text"
            id="title"
            onChange={this.handleChange}
            placeholder="Book title"
            className="new-book-input"
            required
          />

          <select
            className="new-book-cat"
            name="book[category]"
            onChange={this.handleChange}
            value={category}
          >
            {catList}
          </select>
          <button className="add-book-btn" type="submit">
            ADD BOOK
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
