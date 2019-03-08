import React, { Component } from 'react';
import Todo from './Todo';
import Addtodo from './Addtodo';

class App extends Component {
    state = {
      todos:[
        {id:1, item:'Play pubg'},
        { id:2, item:'cards'}
      ]
    }
    deleteTodo=(id)=>{
      let todos = this.state.todos.filter(todos=>{
        return todos.id !== id
      })
      this.setState({
        todos
      })
    }
    add=(info)=>{
      info.id = Math.random();
      let todos = [...this.state.todos,info];
      this.setState({
        todos
      })
    }
    render(){
      return (
        <div className="App container">
        <h1 className='center purple-text'>My Todo's</h1>
        <Todo todos = {this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo add = { this.add }/>
        </div>
      );
    }
}
export default App;
