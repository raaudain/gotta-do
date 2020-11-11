import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      todos:
        // Retrieves and displays items from local storage
        localStorage.getItem("todos")
          ? JSON.parse(localStorage.getItem("todos"))
          : []
    };
  }

  // Sets items in local storage
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  // Creates new item
  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      isDone: false
    };

    this.setState({
      todos: [...this.state.todos, newItem] // Adds new item to the end of the Todos array.
    });
  };

  // Toggles item as FALSE or TRUE when clicked.
  toggleItem = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item, // Spread operator flattens array
            isDone: !item.isDone // If the "id is equal, change the value from false to true"
          };
        } else {
          return item;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((item) => !item.isDone) // Looking for uncompleted tasks
    });
  };

  render() {
    return (
      <>
        <h2>Gotta Do List</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </>
    );
  }
}

export default Homepage;
