import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../axios";
import updateTaskList from "../api/updateTaskList";

const TaskStatus = (data) => {

    const [thisState, setState] = useState({
        status: data.status
    })

    const state = useSelector(state => state)
    const amountOfStatus = state.statusDefinitions.length
    
    const action = async () => {
        let currentStatusId = state.statusDefinitions.filter(x => x.name === thisState.status)[0].id
        let nextStatusId = currentStatusId + 1
        
        if (nextStatusId === amountOfStatus - 1) {
            nextStatusId = 1
        }
        let nextStatus = state.statusDefinitions.filter(x => x.id === nextStatusId)[0].name

        await axiosInstance.patch(
            `tasks/task-update/${data.id}`,
            {
                status: nextStatusId
            }
        ).then((response) => {
            setState({
                status: nextStatus
            })
        }).catch((error) => {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            alert("It has ocurred a server error, please try again later")
        })
        

    }

    return (
        <div className="row react-TaskStatus">
            <div className="col" onMouseUp={action}>
                <p>Status - {thisState.status}</p>
            </div>
        </div>
    );

}

export default TaskStatus;