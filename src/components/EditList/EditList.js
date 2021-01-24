import React, { Component } from "react";
import UserResp from "../UserResp/UserResp";
import "./EditList.css";

export default class EditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showUserResp: false,
      selectedIndex: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((users) => this.setState({ users }, console.log(users)));
  }

  handleClick(e) {
    console.log(e.target.value);
    this.setState({
      showUserResp: true,
      selectedIndex: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>Welcome to Edit List Component!!</p>
        <ul>
          {this.state.users.map((user, index) => (
            <li
              onClick={this.handleClick}
              key={index}
              value={index}
            >{`${user.name} ${user.age}`}</li>
          ))}
        </ul>
        {this.state.showUserResp && (
          <UserResp
            name={this.state.users[this.state.selectedIndex].name}
            age={this.state.users[this.state.selectedIndex].age}
          />
        )}
      </div>
    );
  }
}
