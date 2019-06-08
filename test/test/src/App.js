import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
import { connect } from 'react-redux';
// import { deleteTodo } from './todoActions';

class App extends Component {
  deleteTodoX = (id) => {
    this.props.deleteTodo(id);
    // const todos = this.props.todos.filter(todo => {
    //   return todo.id !== id
    // });
    // this.setState({
    //   todos: todos
    // })
  }
  addTodoX = (todo) => {
    todo.id = Math.random();
    this.props.addTodo(todo);
    // let todos = [...this.props.todos, todo];
    // this.setState({
    //   todos
    // })
  }
  openPopUpX = (id) => {
    this.props.openPopUp(id);
  }
  render() {
    console.log(this.props);
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> CoHabs Tasks </h1>
       <Todos todos = { this.props.todos } deleteTodoX= {this.deleteTodoX} openPopUpX = {this.openPopUpX}/>
       <AddForm addTodoX = {this.addTodoX}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch({type: 'DELETE_TODO', id: id}),
    addTodo: (todo) => dispatch({type: 'ADD_TODO', todo: todo}),
    openPopUp: (id) => dispatch({type: 'OPEN_POPUP', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
