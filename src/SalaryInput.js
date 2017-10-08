import React, { Component } from 'react';

class SalaryInput extends Component {
  constructor(props) {
    super(props);

    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handlePerMonthChange = this.handlePerMonthChange.bind(this);
    this.handleSemiMonthlyChange = this.handleSemiMonthlyChange.bind(this);
    this.handleBiWeeklyChange = this.handleBiWeeklyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalaryChange(event) {
    let salary = {
      afterDeductions: event.target.value
    }
    this.props.handleSalaryChange(salary);
  }

  handlePerMonthChange(event) {
    let salary = {
      afterDeductions: event.target.value * 12
    }
    this.props.handleSalaryChange(salary);
  }

  handleSemiMonthlyChange(event) {
    let salary = {
      afterDeductions: event.target.value * 24
    }
    this.props.handleSalaryChange(salary);
  }
  
  handleBiWeeklyChange(event) {
    let salary = {
      afterDeductions: event.target.value * (52 / 2)
    }
    this.props.handleSalaryChange(salary);
  }

  handleSubmit(event) {
    console.debug("handleSubmit??")
    this.props.handleSalarySubmit();
    event.preventDefault();
  }

  render() { 
    const perMonth = Math.floor(this.props.salary.afterDeductions / 12);
    const semiMonthly = Math.floor(this.props.salary.afterDeductions / 24);
    const biWeekly = Math.floor(this.props.salary.afterDeductions / (52 / 2));

    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Salary:
          <input type="number" value={this.props.salary.afterDeductions} onChange={this.handleSalaryChange} />
        </label>
        <ul>
          <li>
            <label>
              Per Month:
              <input type="number" value={perMonth} onChange={this.handlePerMonthChange} />
            </label>
          </li>
          <li>
            <label>
              Semi Monthly:
              <input type="number" value={semiMonthly} onChange={this.handleSemiMonthlyChange} />
            </label>
          </li>
          <li>
            <label>
              Bi Weekly:
              <input type="number" value={biWeekly} onChange={this.handleBiWeeklyChange} />
            </label>
          </li>
        </ul>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default SalaryInput;