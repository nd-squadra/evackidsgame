import React from "react";
import MovingSprite from "./assets/moving_sprite.gif";
import "./Character.css";

export default class Character extends React.Component {
  render() {
    return (
      <div
        className="characterContainer"
        style={{ left: this.props.characterX }}
      >
        {this.props.moving ? (
          <img src={MovingSprite} alt="Moving Sprite" />
        ) : null}
      </div>
    );
  }
}
