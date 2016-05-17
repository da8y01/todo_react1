import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { createStore } from 'redux';


const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return {};
  }
};


let nextTodoId = 0;
class Todo extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              text: 'test',
              id: nextTodoId++
            });
          }}
        >
        Add ToDo
        </button>
        <ul>
          <li>first</li>
          <li>last</li>
        </ul>
      </div>
    );
  }
}


const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

const render = () => {
  ReactDOM.render(
    <Todo todos={store.getState().todos} />,
    document.getElementById('root')
  );
};


store.subscribe(render);
render();
