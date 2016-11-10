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
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      // shows todos not complete, if checkbox is check to show all, incomplete and completed display.
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1;      
    });

    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};