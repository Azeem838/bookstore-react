export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
