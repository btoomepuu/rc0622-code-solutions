import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            todos: data
          }
        );
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo)
      })
      .then(response => response.json())
      .then(todo => {
        const todosCopy = this.state.todos.concat(todo);
        this.setState({ todos: todosCopy });
      });
  }

  toggleCompleted(todoId) {
    const toggleTodo = this.state.todos.find(todo => {
      return todo.todoId === todoId;
    });

    fetch(`/api/todos/${todoId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !toggleTodo.isCompleted })
      })
      .then(response => response.json())
      .then(update => {
        const todosCopy = this.state.todos.map(todo => {
          if (todo.todoId === update.todoId) {
            return update;
          } else {
            return todo;
          }
        });
        this.setState({ todos: todosCopy });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
