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
* Refactor and implements `AddTodo` and `FilterLink` containers using `connect()` react-redux function.
* Separates and implements action creators functions.


## Commands
* Launch: `webpack-dev-server --progress --colors`


### About containers, and why add Provider
The top level variable store refers to the Redux store, and the components use the services it provides; this doesn't scale very well for real applications:
* All the containers are referencing a specific store.
* Hard to implement "universal" applications, because on the server, the app needs to provide a different store instance for every request.

### About *Action Creators*
Maybe you can think this code is a waste, but don't underestimate the *action creators* as useful project documentation because they tell what kind of actions the components can dispatch, and this kind of information is invaluable in larger applications.
