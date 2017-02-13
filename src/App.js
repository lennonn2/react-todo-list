import React, { Component } from 'react';
import './App.css';
import todoReducer from './todo-reducer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  // _getId() {
  //   return Math.floor(Math.random()*90000) + 10000;
  // }
  render() {
    return (
      <div>=
        <button
          onClick={this._addTodo}
        >Add</button>
      </div>
    );
  }
}

export default App;
