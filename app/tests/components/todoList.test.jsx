var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');


describe('TodoList', () => {
  it("TodoList should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render on Todo component for each todo item", () => {
    var todos = [{
      id: 1,
      text: "Finish Todo List"
    }, {
      id: 2,
      text: "Stamp Wedding Thankyous"
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    // checks how many todos are rendered inside of TodoList component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo); // checks how many Todos are in TodoList.

    expect(todosComponents.length).toBe(todos.length);
  });
});