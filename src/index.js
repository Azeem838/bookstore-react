import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const initState = {
  books: [
    {
      id: Math.random(),
      title: 'test 1',
      category: 'action',
    },
    {
      id: Math.random(),
      title: 'test 2',
      category: 'comedy',
    },
    {
      id: Math.random(),
      title: 'test 3',
      category: 'adventure',
    },
  ],
};

const rootReducer = (state = initState) => state;

export default rootReducer;

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
