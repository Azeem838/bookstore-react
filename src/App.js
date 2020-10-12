import React, { Suspense } from 'react';
import BookList from './containers/BookList';
import BookForm from './containers/BookForm';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BookList />
        <BookForm />
      </Suspense>
    </div>
  );
}

export default App;
