import React, { Component } from 'react';

class AgeInput extends Component {
  constructor(props) {
    super(props);

    this.onChangeAge = this.onChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeAge(event) {
    this.props.handleAgeChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.handleAgeSubmit();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Age:
          <input type="number" value={this.props.age} onChange={this.onChangeAge} />
        </label>
      </form>
    );
  }
}

export default AgeInput;