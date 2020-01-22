import React from "react"

// Props from TodoList.js
const Todo = props => {

    return(
        <div
            // Changes class name when item is clicked.  toggleItem function in App.js
            className={`item${props.item.isDone ? "Completed" : ""}`}
            onClick={() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>
        </div>
    );
}

export default Todo;