# ReactJS ToDo example, step by step.

## Links
* Getting Started with Redux: https://egghead.io/series/getting-started-with-redux
* Setting up React for ES6 with Webpack and Babel: https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html


## Steps
* Make a working directory: `mkdir todo_steps1`
* Enter to the working directory: `cd todo_steps1`
* Initialize git CVS: `git init`
* Initialize NPM: `npm init`
* Install the NPM required libs.
* Setup the Webpack configuration, and implement a first tiny react Todo component to test the configuration.
* Implement the Todo react component using Redux methods, add reducers, and update the UI component.
* Implement the dynamically passed to the react component list of state ToDos.
* Implement the ToDo toggling dispatching an action on the list item.
* In the view list, make the list item cross-lined.
* Adds filtering ToDos dispatching the `SET_VISIBILITY_FILTER` action.
* Create a new `FilterLink` component.
* Use the newly created `FilterLink` component in the `TodoApp` component.
* Refactor, extract presentational components.
* Create `Todo` and `TodoList` components, and use they in `TodoApp` component.
* Refactor, extract input and button in `AddTodo`.
* Refactor, extract filter bottom in `Footer`.
* Use `AddTodo` and `Footer` in `TodoApp` *container*.
* Refactor `TodoApp` to be a function with a single expression.
* Refactor, implement a *container* `FilterLink` for a `Link` presentational/visual component.
* Refactor, extract container components from the top level container component.
* Implement a `VisibleTodoList` container that connects the `TodoList` with the Redux store.
* Refactor and implements `VisibleTodoList` container using `connect()` react-redux function.
* Refactor and implements `FilterLink` container using `connect()` react-redux function.


## Commands
* Launch: `webpack-dev-server --progress --colors`
