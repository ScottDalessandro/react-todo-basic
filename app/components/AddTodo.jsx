var React= require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    
    var todoText = this.refs.todoText.value;
    
    if(todoText.length > 0){
      this.refs.todoText.value = "";
      this.props.handleAddTodo(todoText);
    } else {
      this.refs.todoText.focus(); // places cursor back into input field.
    }    
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" type="text" placeholder="What do I need to do?"/>
          <button className='button expanded'>Add Todo</button>          
        </form>      
      </div>
    )
  }
});

module.exports = AddTodo;