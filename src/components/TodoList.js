import React from "react";
import Todo from "./Todo";

// Getting props from App.js
const TodoList = props => {
  return (
    <div className="todolist">
      {props.todos.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}

      {/* clearCompleted function in App.js */}
      <button className="clearBtn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
