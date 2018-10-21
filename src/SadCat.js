import React from "react";
import "./SadCat.css";

const SAD_CAT_BEFORE_TALK = require("./assets/sad_cat_before_talk.png");
const SAD_CAT_TALK_1 = require("./assets/sadcattalk1.png");
const SAD_CAT_TALK_2 = require("./assets/sadcattalk2.png");
const SAD_CAT_TALK_3 = require("./assets/sadcattalk3.png");
const SAD_CAT_TALK_4 = require("./assets/sadcattalk4.png");

export default class SadCat extends React.Component {
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
        <div className="sadCatContainer">
          <img src={SAD_CAT_BEFORE_TALK} alt="Sad Cat Before Talk" />
        </div>
      );
    }
    if (this.state.currentFrame === 0) {
      return (
        <div onClick={this.goToNextFrame} className="sadCatFrameContainer">
          <img src={SAD_CAT_TALK_1} alt="Sad Cat Talk 1" />
        </div>
      );
    } else if (this.state.currentFrame === 1) {
      return (
        <div onClick={this.goToNextFrame} className="sadCatFrameContainer">
          <img src={SAD_CAT_TALK_2} alt="Sad Cat Talk 2" />
        </div>
      );
    } else if (this.state.currentFrame === 2) {
      return (
        <div onClick={this.goToNextFrame} className="sadCatFrameContainer">
          <img src={SAD_CAT_TALK_3} alt="Sad Cat Talk 3" />
        </div>
      );
    } else if (this.state.currentFrame === 3) {
      return (
        <div className="sadCatFrameContainer">
          <img
            className="sadCatOptionAContainer"
            src={require("./assets/option_a_button.jpg")}
            alt="Option A Button"
            onClick={this.goToNextFrame}
          />
          <img
            className="sadCatOptionBContainer"
            src={require("./assets/option_b_button.jpg")}
            alt="Option B Button"
            onClick={this.goToNextFrame}
          />
          <img src={SAD_CAT_TALK_4} alt="Sad Cat Talk 4" />
        </div>
      );
    }
  }

  goToNextFrame() {
    if (this.state.currentFrame < 3) {
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
