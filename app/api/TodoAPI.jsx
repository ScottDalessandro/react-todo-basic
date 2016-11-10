var $ = require('jquery');


module.exports = {
  setTodos: function(todos){
    if(Array.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);  // can fail if data is invalid
    } catch (error) {
      console.log(error);
    }

    return Array.isArray(todos) ? todos : [];    
  }
};