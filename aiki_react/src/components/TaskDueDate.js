import React, { Component } from "react";

const TaskDueDate = (data) => {

    return (
        <div className="row react-TaskDueDate">
            <div className="col">
                <p>Due Date - {data.date}</p>
            </div>
        </div>
    );

}

export default TaskDueDate;