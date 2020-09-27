import React from 'react';
import BookList from './containers/BookList';
import BookForm from './containers/BookForm';
import CategoryFilter from './containers/CategoryFilter';

function App() {
  return (
    <div>
      <CategoryFilter />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
