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
      id: null,
      title: null,
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      id: Math.random(),
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    createBook(this.state);
    e.target.reset();
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
            name="title"
            type="text"
            id="title"
            onChange={this.handleChange}
            placeholder="Book title"
            className="new-book-input"
          />

          <select
            className="new-book-cat"
            name="category"
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
