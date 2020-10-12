import React from 'react';

const api_url = 'http://localhost:3000/api/v1/books';

const getBooks = () => {
  fetch(api_url)
    .then((response) => response.json())
    .then((items) => {
      setState({
        books: items,
      });
    });
};
