import React, { Component } from "react";

import Note from "./note";

class Notes extends Component {
  render() {
    return (
      <div>
        <h3>NOTES</h3>
        <ul className="list">
          {this.props.notes.map((note, i) => {
            return (
              <Note
                title={this.props.notes[i].title}
                descption={this.props.notes[i].description}
                key={this.props.notes[i].id}
                handleRemover={this.props.handleRemover}
                id={this.props.notes[i].id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Notes;
