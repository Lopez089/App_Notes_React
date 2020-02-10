import React, { Component } from "react";
import FormNotes from "./formNotes";

class AddNotes extends Component {
  render() {
    return (
      <div className="addNotes">
        <FormNotes
          handleAdd={this.props.handleAdd}
          textInput={this.textInput}
        />
      </div>
    );
  }
}

export default AddNotes;
