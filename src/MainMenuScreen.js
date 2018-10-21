import React from "react";
import "./MainMenuScreen.css";

export default class MainMenuScreen extends React.Component {
  render() {
    return (
      <div className="mainMenuContainer">
        <div className="mainMenuButtons">
          <img
            className="myCatButton"
            alt="My Cat Button"
            src={require("./assets/cattolongmycat.png")}
            onClick={() => this.props.setCurrentPage("MainMenu")}
          />
          <img
            className="playButton"
            alt="Play Button"
            src={require("./assets/cattolongstartgame.png")}
            onClick={() => this.props.setCurrentPage("Game")}
          />
          <img
            className="galleryButton"
            alt="Gallery Button"
            src={require("./assets/cattolonggallery.png")}
            onClick={() => this.props.setCurrentPage("MainMenu")}
          />
        </div>
      </div>
    );
  }
}
