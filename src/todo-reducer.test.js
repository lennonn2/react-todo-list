import todoReducer from './todo-reducer';

// describe('add a todo to list', () => {
//   it('should add todo to array', () => {
//     const before = [];
//     const after = [{
//       id: 0,
//       text: 'Test text',
//       completed: false
//     }];
//     todoReducer.dispatch({
//       type: 'ADD_TODO',
//       id: 0,
//       text: 'Test text'
//     });
//     expect(todoReducer.getState()).toEqual(after);
//   })
// });

describe('toggle a todo from the list', () => {
  beforeEach(() => {
    jest.resetModules();
    todoReducer.dispatch({
      type: 'ADD_TODO',
      id: 0,
      text: 'Second text'
    });
    todoReducer.dispatch({
      type: 'ADD_TODO',
      id: 0,
      text: 'Test text'
    });
  });
  it('should mark a todo as completed', () => {
    const before = [{
      id: 0,
      text: 'Some text',
      completed: false
    }, {
      id: 1,
      text: 'Second text',
      completed: false
    }];
    const after = [{
      id: 0,
      text: 'Some text',
      completed: false
    }, {
      id: 1,
      text: 'Second text',
      completed: true
    }];
    todoReducer.dispatch({
      type: 'TOGGLE_TODO',
      id: 1
    })
    expect(todoReducer.getState()).toEqual(after);
  })
})
