var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [{id: 1, text: "Finish TodoApp"}, {id:2, text:'Finish Wedding Invites'}]
    }
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});


module.exports = TodoApp;