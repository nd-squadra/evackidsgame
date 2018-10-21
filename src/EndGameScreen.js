import React from "react";
import "./EndGameScreen.css";

export default class EndGameScreen extends React.Component {
  render() {
    return (
      <div
        className="endGameContainer"
        onClick={() => this.props.setCurrentPage("MainMenu")}
      />
    );
  }
}
