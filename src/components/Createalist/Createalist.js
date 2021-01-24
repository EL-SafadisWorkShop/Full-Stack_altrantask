import React, { Component } from "react";
import UserResp from "../UserResp/UserResp";

export default class Createalist extends Component {
  //I am initialing state of component by assigning
  //an object to this.state. The state Comprises
  //the following properties

  constructor(props) {
    super(props);
    this.state = {
      input_Name: "",
      input_Age: "",
      showUserResp: false,
      newUser: {},
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendUser = this.sendUser.bind(this);
  }

  sendUser() {
    const data = { name: this.state.input_Name, age: this.state.input_Age };
    console.log("name: " + data.name);
    fetch("http://localhost:4000", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          newUser: data,
        });
      });
  }

  //==========================================
  //Adding methods which can be used to
  //update the state properties
  onChangeName(e) {
    console.log(e.target.value);
    this.setState({
      input_Name: e.target.value,
    });
  }

  onChangeAge(e) {
    console.log(e.target.value);
    this.setState({
      input_Age: e.target.value,
    });
  }
  //==========================================

  //Another method is needed to handle the submit (e)
  //of the form which will be implemented to create
  //new names
  onSubmit(e) {
    e.preventDefault();
    console.log(`Form Names submitted: `);
    console.log(`Name enterd: ${this.state.input_Name}`);
    console.log(`Age enterd: ${this.state.input_Age}`);
    this.sendUser();
    this.setState({
      showUserResp: true,
      input_Name: "",
      input_Age: "",
    });
  }

  //==========================================
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <p className="f3">ENTER YOUR NAME AND AGE PLEASE!</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>NAME:</label>
            <input
              type="text"
              className="form-control"
              placeholder={this.state.input_Name}
              onChange={this.onChangeName}
              value={this.state.input_Name}
              required
            />
          </div>
          <div className="form-group">
            <label>AGE:</label>
            <input
              type="number"
              className="form-control"
              placeholder={this.state.input_Age}
              onChange={this.onChangeAge}
              value={this.state.input_Age}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Creat Person"
              className="btn btn-primary"
            />
          </div>
        </form>
        {this.state.showUserResp && (
          <UserResp
            name={this.state.newUser.name}
            age={this.state.newUser.age}
          />
        )}
      </div>
    );
  }
}
