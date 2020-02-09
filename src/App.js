import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./css/Todo.css";

class App extends React.Component {
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

  // Toggles item as FALSE or TRUE when clicked.
  toggleItem = id => {
    console.log(`Item number: ${id}`);
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          console.log(`Completed: ${!item.isDone}`); // Shows value item should be once clicked.
          return {
            ...item, // Spread operator flattens array
            isDone: !item.isDone // If the "id is equal, change the value from false to true"
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    // Creates new item
    const newItem = {
      task: itemName,
      id: Date.now(),
      isDone: false
    };
    this.setState({
      todos: [...this.state.todos, newItem] // Adds new item to the end of the Todos array.
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.isDone) // Looking for uncompleted tasks
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Gotta Do List</h2>
        <TodoForm addItem={this.addItem} />

        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
