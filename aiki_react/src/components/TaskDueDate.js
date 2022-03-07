import React, { Component } from "react";

const TaskDueDate = (data) => {

    let date = "02/02/2022"

    return (
        <div className="row react-TaskDueDate">
            <div className="col">
                <p>Due Date - {date}</p>
            </div>
        </div>
    );

}

export default TaskDueDate;