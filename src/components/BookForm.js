import React from 'react';

const BookForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const catList = categories.map(cat => (
    <option key={Math.random()} value={cat}>
      {cat}
    </option>
  ));

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" />
      </label>

      <select name="categories" id="">
        {catList}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
