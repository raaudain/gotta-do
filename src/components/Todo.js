import React from "react";
import {DndProvider} from "react-dnd";
import Backend from "react-dnd-html5-backend";

class Todo extends React.Component {
  render() {

    return (
      <DndProvider backend={Backend}>

      
      <div
        // Changes class name when item is clicked.
        className={`item${this.props.item.isDone ? "Completed" : ""}`}
        onClick={() => this.props.toggleItem(this.props.item.id)}
        draggable
      >
        <p>{this.props.item.task}</p>
      </div>
      </DndProvider>
    );
  };
}

export default Todo;
