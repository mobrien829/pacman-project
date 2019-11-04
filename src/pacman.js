import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Icon } from "./assets/pacman.svg";

class Pacman extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress(event) {
    // numbers in keys array refer to the arrow keys. used https://keycode.info/ to find out event listener key codes
    var keys = [37, 38, 39, 40];

    if (keys.includes(event.keyCode)) {
      this.rotate(event.keyCode);
    }
  }
}
