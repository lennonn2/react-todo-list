import React from 'react';
import ReactDOM from 'react-dom'
// import FirstApp from './FirstApp';
import './index.css';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
