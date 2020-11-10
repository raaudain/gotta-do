import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: null
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.reset(); // Resets value/text field to blank
    
    // Checks if there is text before submission
    if (this.state.item) {
      this.props.addItem(this.state.item);
    }

    // Resets the state to null
    this.setState({
      item: null
    });
  };

  // For reference
  // If browser width is larger than 600px...
  // placeholderText = window.innerWidth > 600 ? "Whatcha gotta do?" : "Enter task...";

  placeholderText = "Enter task...";

  render() {
    return (
      <form className="form" onSubmit={this.submitHandler}>
        <input
          className="inputField"
          placeholder={this.placeholderText}
          type="text"
          value={this.item}
          name="item"
          onChange={this.changeHandler}
        />
        <button className="addBtn">Add</button>
      </form>
    );
  }
}

export default TodoForm;
