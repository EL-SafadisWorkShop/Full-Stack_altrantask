import React, { Component } from "react";

export default class UserResp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthYear: null,
    };
    this.birthYear = this.birthYear.bind(this);
  }

  birthYear(userAge) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthYear = currentYear - userAge;
    return birthYear;
  }

  render() {
    return (
      <div>
        <p>
          Hello, {this.props.name} your birth year is{" "}
          {this.birthYear(this.props.age)}
        </p>
      </div>
    );
  }
}
