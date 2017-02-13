import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import { Provider } from 'react-redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

export default TodoApp;
