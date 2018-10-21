import React, { Component } from "react";
import LoginScreen from "./LoginScreen";
import MainMenuScreen from "./MainMenuScreen";
import GameScreen from "./GameScreen";
import EndGameScreen from "./EndGameScreen";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.state = {
      currentPage: "Login",
      name: "",
      students: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitResults = this.submitResults.bind(this);
  }

  componentDidMount() {
    fetch("https://orbital-demo-4d66a.firebaseio.com/students_new.json", {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse =>
        this.setState({
          students: jsonResponse
        })
      );
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  setCurrentPage(pageName) {
    this.setState({
      currentPage: pageName
    });
  }

  submitResults(childflag) {
    let studentId;
    this.state.students &&
      Object.keys(this.state.students).forEach(student => {
        if (this.state.students[student].name === this.state.name) {
          studentId = student;
        }
      });
    fetch(
      `https://orbital-demo-4d66a.firebaseio.com/students_new/${studentId}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          childflag
        })
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse =>
        this.setState({
          students: jsonResponse
        })
      );
  }

  render() {
    if (this.state.currentPage === "Login") {
      return (
        <div className="appContainer">
          <LoginScreen
            setCurrentPage={this.setCurrentPage}
            handleChange={this.handleChange}
            name={this.state.name}
          />
        </div>
      );
    } else if (this.state.currentPage === "MainMenu") {
      return (
        <div className="appContainer">
          <MainMenuScreen setCurrentPage={this.setCurrentPage} />
        </div>
      );
    } else if (this.state.currentPage === "Game") {
      return (
        <div className="appContainer">
          <GameScreen
            setCurrentPage={this.setCurrentPage}
            submitResults={this.submitResults}
          />
        </div>
      );
    } else if (this.state.currentPage === "EndGame") {
      return (
        <div className="appContainer">
          <EndGameScreen setCurrentPage={this.setCurrentPage} />
        </div>
      );
    }
  }
}

export default App;
