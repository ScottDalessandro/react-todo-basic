var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [{id: uuid(), text: "Finish TodoApp"}, {id:uuid(), text:'Finish Wedding Invites'}]
    }
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: text,
          id: uuid()
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo handleAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});


module.exports = TodoApp;