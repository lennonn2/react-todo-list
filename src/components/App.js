import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import AddTodo from '../containers/AddTodo';

const TodoApp = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <Footer />
  </div>
);

export default TodoApp;
