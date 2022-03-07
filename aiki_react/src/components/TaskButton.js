import React, { Component } from "react";
import check_icon from './resources/check_icon.svg';
import checked_icon from './resources/checked_icon.svg';
import delete_icon from './resources/delete_icon.svg';

const TaskButton = (data) => {

    let icon = null;
    if (data.name === "check") {
        icon = check_icon;
    }
    else if (data.name === "delete") {
        icon = delete_icon;
    }

    return (
        <button className="react-TaskButton">
            <img src={icon}/>
        </button>
    );

}

export default TaskButton;