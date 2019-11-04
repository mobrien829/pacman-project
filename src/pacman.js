import { React, useState } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Icon } from "./assets/pacman.svg";

// build class version with lifecycle methods first, then change to hooks
class Pacman extends React.Component {
  constructor(props) {
    super(props);
    this.state = { direction: "right", position: { top: 0, left: 0 } };
  }

  componentDidMount() {
    this.container = ReactDOM.findDOMNode(this);
    setInterval(this.move.bind(this), 250);
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }

  handleKeyPress(event) {
    // numbers in keys array refer to the arrow keys. used https://keycode.info/ to find out event listener key codes
    let keys = [37, 38, 39, 40];

    if (keys.includes(event.keyCode)) {
      this.rotate(event.keyCode);
    }
  }

  move() {
    let leftPosition = this.state.position.left;
    let topPosition = this.state.position.top;
    switch (this.state.direction) {
      case "left":
        this.setState({
          position: {
            top: topPosition,
            left: Math.max(leftPosition - this.props.velocity, 0)
          }
        });
      case "up":
        this.setState({
          position: {
            top: Math.max(topPosition - this.props.velocity, 0),
            left: leftPosition
          }
        });
      case "down":
        this.setState({
          position: {
            top: Math.min(
              topPosition + this.props.velocity,
              window.innerHeight -
                this.props.pacmanSize -
                this.props.border -
                this.props.topScoreBoard
            ),
            left: topPosition
          }
        });
      case "right":
        this.setState({
          position: {
            top: topPosition,
            left: Math.min(
              leftPosition + this.props.velocity,
              window.innerWidth - this.props.border - this.props.pacmanSize
            )
          }
        });
    }
  }
  rotate(keyValue) {
    switch (keyValue) {
      case 37:
        this.setState({ direction: "left" });
      case 38:
        this.setState({ direction: "up" });
      case 39:
        this.setState({ direction: "right" });
      case 40:
        this.setState({ direction: "down" });
    }
  }
}

Pacman.defaultProps = {
  velocity: 20,
  pacmanSize: 60,
  border: 20,
  topScoreBoard: 100
};

export default Pacman;
