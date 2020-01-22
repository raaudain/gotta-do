import React from "react";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ""
        };
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.reset(); // Resets value to blank
        this.props.addItem(this.state.item); // addItem function located in App.js
    }

    placeholderText = window.innerWidth > 600 ? "Whatcha gotta do?" : "Enter task...";
    

    render(){
        return(

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