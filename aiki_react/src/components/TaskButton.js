import React, { Component, useState } from "react";
import check_icon from './resources/check_icon.svg';
import checked_icon from './resources/checked_icon.svg';
import delete_icon from './resources/delete_icon.svg';

const TaskButton = (data) => {

    const [state, setState] = useState({
        statusIcon: data.status == "Completed" ? checked_icon : check_icon
    })

    let deleteIcon;
    let action;
    if (data.name === "check") {
        action = () => {
            if (state.statusIcon == check_icon){
                setState({statusIcon: checked_icon})
            }
            else{
                setState({statusIcon: check_icon})
            }
        }
    }
    else if (data.name === "delete") {
        deleteIcon = delete_icon;

        action = () => {
            alert("Yes, I am going to delete the task")
        }
    }

    return (
        <button className="react-TaskButton" onMouseUp={action}>
            <img src={data.name === "check" ? state.statusIcon : deleteIcon}/>
        </button>
    );

}

export default TaskButton;