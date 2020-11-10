import React from "react";
import Homepage from "./components/Homepage";
import "./css/Todo.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Homepage />
      </div>
    );
  }
}

export default App;
