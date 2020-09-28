import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
import categories from '../constants/categories';

class BookForm extends Component {
  state = {
    title: null,
    category: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log(this.state)
    this.props.createBook(this.state)
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
=======
    const { createBook } = this.props;
    createBook(this.state);
    e.target.reset();
  }

  render() {
>>>>>>> milestone-4
    const catList = categories.map(cat => (
      <option key={Math.random()} value={cat}>
        {cat}
      </option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title:
        <input name="title" type="text" id="title" onChange={this.handleChange} />
        </label>

        <select name="category" id="" onChange={this.handleChange} value={this.state.category}>
          {catList}
        </select>
        <button type="submit">Submit</button>
      </form >
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => { dispatch(createBook(book)) }
  }
}


<<<<<<< HEAD
=======
BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

>>>>>>> milestone-4
export default connect(null, mapDispatchToProps)(BookForm);
