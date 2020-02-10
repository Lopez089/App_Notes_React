import React, { Component } from "react";

class Note extends Component {
  remover() {
    let id = this.props.id;
    this.props.handleRemover(id);
  }
  render() {
    return (
      <li className="note">
        <div className="noteBody">
          <h4>{this.props.title}</h4>
          <p>{this.props.descption}</p>
        </div>
        <div
          className="noteFinalize"
          onClick={() => {
            this.remover();
          }}
        >
          <i class="fas fa-trash-alt" />
        </div>
      </li>
    );
  }
}

export default Note;
