import React from "react";

// Props from TodoList.js
class Todo extends React.Component {
  render() {
    console.log(this)
    return (
      <div
        // Changes class name when item is clicked.  toggleItem function in App.js
        className={`item${this.props.item.isDone ? "Completed" : ""}`}
        onClick={() => this.props.toggleItem(this.props.item.id)}
      >
        <p>{this.props.item.task}</p>
      </div>
    );
  };
}


export default Todo;
