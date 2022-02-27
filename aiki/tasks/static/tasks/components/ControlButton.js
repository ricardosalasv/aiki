import React, { Component } from "react";
import ReactDOM from 'react-dom';

class ControlButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickAction() {
        console.log(this.props.name)
    }

    render() {
        

        return (
          <button onClick={this.onClickAction}>
              {this.props.name}
          </button>
        );
    }
}

export default ControlButton;