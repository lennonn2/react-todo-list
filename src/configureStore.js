import todoApp from './reducers';
import { loadState, saveState } from './utils/localStorage';
import {createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';

const configureStore = () => {
  // const todoApp = combineReducers({
  //   todos,
  //   visibilityFilter
  // });

  const persistedState = loadState();

  const store = createStore(
    todoApp,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 10000));

  return store;
}

export default configureStore;
