import React, { Component } from 'react';

import NameInput from './NameInput.js'
import AgeInput from './AgeInput.js'
import SalaryInput from './SalaryInput.js'

class Finances extends Component {
  constructor(props) {
    super(props);
    this.handleSkipNameClick = this.handleSkipNameClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleAgeSubmit = this.handleAgeSubmit.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
    this.state = {
      isNameSkipped: false,
      isNameSubmitted: false,
      isAgeSubmitted: false,
      isSalarySubmitted: false,
      name: "Johnny Bravo",
      age: 27,
      salary: {
        afterDeductions: 2503 * 2 * 12
      }
    };
  }

  handleSkipNameClick() {
    this.setState(prevState => ({isNameSkipped: !prevState.isNameSkipped}));
  }

  handleNameChange(name) {
    this.setState({name: name});
  }
  
  handleNameSubmit() {
    this.setState({isNameSubmitted: true});
  }

  handleAgeChange(age) {
    this.setState({age: age});
  }
  
  handleAgeSubmit() {
    this.setState({isAgeSubmitted: true});
  }

  handleSalaryChange(salary) {
    this.setState({salary: salary});
  }

  handleSalarySubmit() {
    console.debug("salary submitted")
    this.setState({isSalarySubmitted: true});
  }


  render() {
    const isNameSkipped = this.state.isNameSkipped;
    const isNameSubmitted = this.state.isNameSubmitted;
    const isAgeSubmitted = this.state.isAgeSubmitted;
    const isSalarySubmitted = this.state.isSalarySubmitted;
    const name = this.state.name;
    const age = this.state.age;
    const salary = this.state.salary;

    let skipNameButtonText = "";
    if (isNameSkipped) {
      skipNameButtonText = "Undo";
    } else {
      skipNameButtonText = "Skip"
    }

    let ageElement = null;

    if (age < 25) {
      ageElement = <YoungAgeMessage age={age} />;
    } else if (age >= 25 && age < 50) {
      ageElement = <MiddleAgeMessage age={age} />;
    } else {
      ageElement = <OldAgeMessage age={age} />;
    }

    let salaryElement = null;
    if (salary.afterDeductions < 25000) {
      salaryElement = <p><code>{salary.afterDeductions}</code> a year ain't bad</p>
    } else if (salary.afterDeductions >= 25000 && salary.afterDeductions < 75000) {
      salaryElement = <p><code>{salary.afterDeductions}</code> a year is good</p>
    } else if (salary.afterDeductions >= 75000 && salary.afterDeductions < 125000) {
      salaryElement = <p><code>{salary.afterDeductions}</code> a year is great</p>
    } else {
      salaryElement = <p><code>{salary.afterDeductions}</code> a year. . . You my friend, are ballin'</p>
    }

    return (
      <div>
        {!isNameSkipped &&
          <NameInput 
            name={name}
            handleNameChange={this.handleNameChange} 
            handleNameSubmit={this.handleNameSubmit} />
        }
        <button className="SkipNameButton" onClick={this.handleSkipNameClick}>
          {skipNameButtonText}
        </button>
        {(isNameSubmitted || isNameSkipped) &&
          <div>
            <p>Hello <code>{name}</code>. . . Now, why not tell me a little bit about yourself, and I can start showing you your Financial Future!</p>
            <p>For starters, how old are you?</p>
            <AgeInput
              age={age}
              handleAgeChange={this.handleAgeChange}
              handleAgeSubmit={this.handleAgeSubmit} />
          </div>
        }
        {isAgeSubmitted &&
          <div>
            {ageElement}
            <p>
              So, let's get down to business.  How much money do you make in a year?  
              Take out deductions, taxes, 401k contributions, etc. . . I just want to know
              how big that paycheck is.
            </p>
            <SalaryInput
              salary={salary}
              handleSalaryChange={this.handleSalaryChange}
              handleSalarySubmit={this.handleSalarySubmit} />
          </div>
        }
        {isSalarySubmitted &&
          <div>
            {salaryElement}
          </div>
        }
      </div>
    );
  }
}

function YoungAgeMessage(props) {
  return <p>Hmm, so you're only <code>{props.age}</code>. . .  Lucky you.</p>;
}

function MiddleAgeMessage(props) {
  return <p>This is the prime of your life man. <code>{props.age}</code> is a good age.</p>;
}

function OldAgeMessage(props) {
  return <p><code>{props.age}</code>. . . I'm really sorry.  Your Financial Future may be short, but so are great speeches.</p>;
}

export default Finances;