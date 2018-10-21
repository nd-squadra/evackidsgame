import React, { Component } from "react";
import Character from "./Character";
import HappyCat from "./HappyCat";
import SadCat from "./SadCat";
import "./GameScreen.css";
import ScrollLock from "react-scrolllock";

const CAT_X_POSITIONS = [-650, -2000];

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundX: 0,
      currentCat: 0,
      moving: true
    };
    this.dismissCat = this.dismissCat.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
    this.props.submitResults(1);
  }

  componentDidUpdate() {
    if (this.state.backgroundX === CAT_X_POSITIONS[this.state.currentCat]) {
      this.setState({
        currentCat: this.state.currentCat + 1,
        backgroundX: this.state.backgroundX - 1,
        moving: false
      });
      clearInterval(this.state.intervalId);
    } else if (this.state.backgroundX < -2550) {
      this.props.setCurrentPage("EndGame");
    }
  }

  dismissCat() {
    this.setTimer();
  }

  setTimer() {
    const intervalId = setInterval(
      () => this.setState({ backgroundX: this.state.backgroundX - 1 }),
      1
    );
    this.setState({
      intervalId,
      moving: true
    });
  }

  render() {
    return (
      <div
        className="gameContainer"
        style={{
          position: "absolute",
          left: this.state.backgroundX < -450 ? this.state.backgroundX + 450 : 0
        }}
      >
        <ScrollLock />
        <div>
          <Character
            dismissCat={() => this.dismissCat(this.state.currentCat)}
            characterX={-this.state.backgroundX}
            moving={this.state.moving}
          />
          <HappyCat
            currentX={-CAT_X_POSITIONS[0]}
            dismissCat={this.dismissCat}
            startedAnimation={!this.state.moving}
          />
          <SadCat
            currentX={-CAT_X_POSITIONS[1]}
            dismissCat={this.dismissCat}
            startedAnimation={!this.state.moving}
          />
        </div>
      </div>
    );
  }
}

export default GameScreen;
