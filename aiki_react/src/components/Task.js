import React, { Component } from "react";
import TaskButton from "./TaskButton";
import TaskDueDate from "./TaskDueDate";
import TaskStatus from "./TaskStatus";

const Task = (data) => {

    // Retrieving the name of the status assigned to the current task
    let status = JSON.parse(localStorage.getItem("statusDefinitions") || [])
        .filter(x => x.id == data.status)[0].name

    return (
        <div className="row react-Task align-items-center justify-content-around">
            <div className="col-1">
                <TaskButton name="check" status={status} />
            </div>
            <div className="col-2">
                <p>{data.title}</p>
            </div>
            <div className="col">
                <TaskStatus status={status} />
            </div>
            <div className="col">
                <TaskDueDate date={data.due_date} />
            </div>
            <div className="col-1">
                <TaskButton name="delete" />
            </div>
        </div>
    );

}

export default Task;