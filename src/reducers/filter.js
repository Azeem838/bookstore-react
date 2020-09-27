export const filter = (state = "All", action) => {
  if (action.category) {
    return state = action.category
  } else {
    return state;
  }
};