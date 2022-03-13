import React, { useSelector, useState } from "react";
import updateTaskList from "../api/updateTaskList";
import axiosInstance from "../axios";

const TaskCreateForm = (data) => {

    const action = async () => {
        let taskName = document.querySelector("#TaskName").value
        let dueDate = document.querySelector("#DueDate").value

        let task = {
            title: taskName,
            deadline: dueDate
        }

        await axiosInstance.post(
            'tasks/task-create/',
            [task]
        ).then((response) => {
            updateTaskList()
            data.setParentState({
                isCreateTaskDialogVisible: false
            })
        }).catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            alert("It has ocurred a server error, please try again later")
        })
    }

    return (
        <div className="row react-TaskCreateForm justify-content-between p-3">
            <form className="d-flex d-inline-block">
                <div className="col">
                    <label htmlFor="TaskName" className="d-flex d-block"><h5>Task Name</h5></label>
                    <input type="text" id="TaskName" />
                </div>
                <div className="col">
                    <label htmlFor="DueDate" className="d-flex d-block"><h5>Due Date</h5></label>
                    <input type="date" id="DueDate" required pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"/>
                </div>
                <div className="col">
                    <label className="d-flex d-block hidden-element"><h5>-</h5></label>
                    <input type="button" value="Create" onMouseUp={action}/>
                </div>
            </form>
        </div>
    )

}

export default TaskCreateForm;