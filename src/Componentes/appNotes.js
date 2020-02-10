import React, { Component } from "react";

import AddNotes from "./addNotes";
import Notes from "./notes";

class AppNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "hacer de comer",
          description: "esta noche hacer de comer"
        },
        {
          id: 2,
          title: "hacer deporte",
          description: "esta tarde salgo a corre"
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }

  // para el ide hasta este console

  handleRemover(id) {
    let { notes } = this.state;

    notes.splice(0, 1);

    this.setState(() => ({
      notes
    }));
  }

  handleAdd(title, description) {
    let { notes } = this.state;

    let newNote = {
      id: this.state.notes.length + 1,
      title: title,
      description: description
    };

    notes.push(newNote);

    this.setState(() => ({
      notes
    }));
    document.getElementById("form").reset();
    document.getElementById("title").focus();
  }
  render() {
    return (
      <div className="notesApp">
        <AddNotes handleAdd={this.handleAdd} textInput={this.props.textInput} />
        <Notes notes={this.state.notes} handleRemover={this.handleRemover} />
      </div>
    );
  }
}

export default AppNotes;
