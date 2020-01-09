import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../redux/actions";

class RemoveTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleRemoveTodo = () => {
    this.props.removeTodo();
  };

  render() {
    return (
      <div>
        <button className="remove-todo" onClick={this.handleRemoveTodo}>
          Remove Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { removeTodo }
)(RemoveTodo);
// export default AddTodo;
