const books = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    return [...state, action.book];
  }
  if (action.type === 'REMOVE_BOOK') {
    const newBooks = state.books.filter((book) => book.id !== action.book.id);
    return [newBooks];
  }
  return state;
};

export default books;
