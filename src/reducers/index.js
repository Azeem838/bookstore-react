const initState = {
  books: [
    {
      id: 1, title: "test 1", category: "string"
    }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}


export default rootReducer;