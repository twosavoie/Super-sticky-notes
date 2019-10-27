import React, { Component } from "react";

class Note extends Component {
  updateTitle = e => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
  updateDescription = e => {
    var updatedValue = e.target.value;
    var editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
  clickDelete = () => this.props.remove(this.props.note.id);
  render() {
    return (
      <li className="note">
        <input
          type="text"
          value={this.props.note.title}
          onChange={this.updateTitle}
          className="note__title"
          placeholder="Title"
        />
        <textarea
          value={this.props.note.description}
          onChange={this.updateDescription}
          className="note__description"
          placeholder="Description..."
        />
        <span onClick={this.clickDelete} className="note__delete">
          X
        </span>
      </li>
    );
  }
}

export default Note;
