import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';

const initState = [
  {
    id: 0,
    title: 'test 1',
    category: 'action',
  },
  {
    id: 1,
    title: 'test 2',
    category: 'comedy',
  },
  {
    id: 2,
    title: 'test 3',
    category: 'adventure',
  },
];

const store = createStore(rootReducer, { books: initState });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
