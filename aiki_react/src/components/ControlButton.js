import React, { Component } from "react";
import ReactDOM from 'react-dom';

const ControlButton = ({name}) => {

    function onClickAction() {
        console.log(name)
    }

    return (
        <button onClick={this.onClickAction}>
            {name}
        </button>
    );
    
}

export default ControlButton;