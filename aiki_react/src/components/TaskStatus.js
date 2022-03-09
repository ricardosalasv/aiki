import React, { Component } from "react";
import customLocalStorage from '../lib/helpers/customLocalStorage';

const TaskStatus = (data) => {

    return (
        <div className="row react-TaskStatus">
            <div className="col">
                <p>Status - {data.status}</p>
            </div>
        </div>
    );

}

export default TaskStatus;