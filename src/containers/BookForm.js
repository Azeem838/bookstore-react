import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

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
    createBook(this.state);
    e.target.reset();
  }

  render() {
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
    const { category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            name="title"
            type="text"
            id="title"
            onChange={this.handleChange}
          />
        </label>

        <select name="category" onChange={this.handleChange} value={category}>
          {catList}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BookForm);

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
