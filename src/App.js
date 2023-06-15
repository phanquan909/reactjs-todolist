import './App.css';
import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

class AppTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        name: 'Learn',
        status: true,
      }],
    };
  }


  // handleChange = (event) => {
  //   this.setState({ inputValue: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { inputValue, todos } = this.state;
  //   if (inputValue.trim() !== '') {
  //     const newTodo = {
  //       id: Date.now(),
  //       text: inputValue,
  //       completed: false
  //     };
  //     this.setState({ todos: [...todos, newTodo], inputValue: '' });
  //   }
  // }

  // handleToggleComplete = (id) => {
  //   const { todos } = this.state;
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   });
  //   this.setState({ todos: updatedTodos });
  // }

  // handleDelete = (id) => {
  //   const { todos } = this.state;
  //   const updatedTodos = todos.filter(todo => todo.id !== id);
  //   this.setState({ todos: updatedTodos });
  // }

  addTodo = (todo) => {
    const { todos } = this.state;
    const _todos = todos;
    _todos.push(todo);
    this.setState({
      todos: _todos
    })
  }

  render() { 
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <Content todos={todos} />
        <Footer />
      </div >
    );
  }
}
export default AppTodo;