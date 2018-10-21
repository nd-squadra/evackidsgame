import React from "react";
import "./HappyCat.css";

const HAPPY_CAT_TALK_1 = require("./assets/happycattalk1.png");
const HAPPY_CAT_TALK_2 = require("./assets/happycattalk2.png");

export default class HappyCat extends React.Component {
  constructor() {
    super();
    this.state = {
      currentFrame: 0
    };
    this.getCurrentFrame = this.getCurrentFrame.bind(this);
    this.goToNextFrame = this.goToNextFrame.bind(this);
  }

  getCurrentFrame() {
    if (!this.props.startedAnimation) {
      return (
        <div className="happyCatContainer">
          <img
            src={require("./assets/cat_before_talk.png")}
            alt="Cat Before Talk"
          />
        </div>
      );
    }
    if (this.state.currentFrame === 0) {
      return (
        <div onClick={this.goToNextFrame} className="happyCatFrameContainer">
          <img src={HAPPY_CAT_TALK_1} alt="Happy Cat Talk 1" />
        </div>
      );
    } else if (this.state.currentFrame === 1) {
      return (
        <div className="happyCatFrameContainer">
          <img
            className="happyCatOptionAContainer"
            src={require("./assets/option_a_button.jpg")}
            alt="Option A Button"
            onClick={this.goToNextFrame}
          />
          <img
            className="happyCatOptionBContainer"
            src={require("./assets/option_b_button.jpg")}
            alt="Option B Button"
            onClick={this.goToNextFrame}
          />
          <img src={HAPPY_CAT_TALK_2} alt="Happy Cat Talk 2" />
        </div>
      );
    } else {
      return null;
    }
  }

  goToNextFrame() {
    if (this.state.currentFrame < 1) {
      this.setState({
        currentFrame: this.state.currentFrame + 1
      });
    } else {
      this.props.dismissCat();
    }
  }

  render() {
    return (
      <div style={{ position: "absolute", left: this.props.currentX }}>
        {this.getCurrentFrame()}
      </div>
    );
  }
}
