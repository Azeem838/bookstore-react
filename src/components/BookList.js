import React from 'react';
import { connect } from 'react-redux';

const BookList = ({ books }) => {
  return (
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
  )
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}


export default connect(mapStateToProps)(BookList);