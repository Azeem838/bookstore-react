const filter = (state = 'All', action) => {
  if (action.category) {
    const newState = action.category;
    return newState;
  }
  return state;
};

export default filter;
