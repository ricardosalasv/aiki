import React, { Component } from "react";
import ReactDOM from 'react-dom';

const ControlButton = ({name}) => {

    function onClickAction() {
        console.log(name)
    }

    return (
        <div className="col react-control-button">
            <button onClick={onClickAction}>
                {name}
            </button>
        </div>
    );
    
}

export default ControlButton;