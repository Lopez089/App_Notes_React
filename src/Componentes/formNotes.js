import React, { Component } from "react";

class FormNotes extends Component {
  textNote(event) {
    event.preventDefault();
    const title = this.textTitle.value;
    const description = this.textDescription.value;
    this.props.handleAdd(title, description);
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={event => this.textNote(event)}>
          <h3>ADD NOTES</h3>
          <input
            id="title"
            type="text"
            placeholder="Title:"
            ref={input => (this.textTitle = input)}
          />
          <input
            type="text"
            placeholder="Description:"
            ref={input => (this.textDescription = input)}
          />
          <div className="button">
            <button type="submit">+</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormNotes;
