import React, { Component } from 'react';

class NameInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeName(event) {
    this.props.handleNameChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.handleNameSubmit();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.name} onChange={this.onChangeName} />
        </label>
      </form>
    );
  }
}

export default NameInput;