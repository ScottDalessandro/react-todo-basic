var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [{id: 1, text: "Finish TodoApp"}, {id:2, text:'Finish Wedding Invites'}]
    }
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText){
    this.setStat({
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