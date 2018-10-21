import React from "react";
import "./LoginScreen.css";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <input
          className="inputContainer"
          placeholder="Input Name here..."
          value={this.props.name}
          onChange={this.props.handleChange}
        />
        <img
          className="enterButton"
          alt="Enter Button"
          src={require("./assets/cattologin.png")}
          onClick={() => this.props.setCurrentPage("MainMenu")}
        />
      </div>
    );
  }
}
