import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';

const initState = [
  {
    id: Math.random(),
    title: 'test 1',
    category: 'Action',
  },
  {
    id: Math.random(),
    title: 'test 2',
    category: 'Sci-fi',
  },
  {
    id: Math.random(),
    title: 'test 3',
    category: 'Learning',
  },
];

const store = createStore(rootReducer, { books: initState });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
