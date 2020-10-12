const books = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') {
    return [...state, action.book];
  }
  if (action.type === 'REMOVE_BOOK') {
    return state.filter((book) => book.id !== action.id);
  }
  if (action.type === 'LOAD_BOOKS') {
    return [...action.books];
  }
  return state;
};

export default books;
