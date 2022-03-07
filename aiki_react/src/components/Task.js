import React, { Component } from "react";
import TaskButton from "./TaskButton";
import TaskDueDate from "./TaskDueDate";
import TaskStatus from "./TaskStatus";

const Task = (data) => {

    return (
        <div className="row react-Task align-items-center">
            <div key={data.name} className="col-1">
                <TaskButton name="check" />
            </div>
            <div key={data.name} className="col-2">
                <p>{data.name}</p>
            </div>
            <div key={data.name} className="col">
                <TaskStatus />
            </div>
            <div key={data.name} className="col">
                <TaskDueDate />
            </div>
            <div key={data.name} className="col-1">
                <TaskButton name="delete" />
            </div>
        </div>
    );

}

export default Task;