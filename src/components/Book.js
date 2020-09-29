import React from 'react';
import PropTypes from 'prop-types';
import '../styles/bookCard.css';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  return (
    <div className="card-container">
      <div className="book-info">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">Author</div>
        <div className="card-links">
          <button type="button">Comments</button>
          <button type="button" onClick={() => removeBook(id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="progress-info">
        <div className="progress-center">
          <svg>
            <circle cx="70" cy="70" r="34" />
            <circle cx="70" cy="70" r="34" />
          </svg>
          <div className="percent-of-circle">
            <div className="percent-completed">64%</div>
            <div className="completed">Completed</div>
          </div>
        </div>
        <div className="progress-update">
          <div className="current-chapter">Current Chapter</div>
          <div className="chapter">Chapter 17</div>
          <button type="button" className="progress-btn">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
