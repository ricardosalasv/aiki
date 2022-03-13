import React, { Component, useState } from "react";
import check_icon from './resources/check_icon.svg';
import checked_icon from './resources/checked_icon.svg';
import delete_icon from './resources/delete_icon.svg';
import axiosInstance from "../axios";
import { useSelector } from "react-redux";
import updateTaskList from "../api/updateTaskList";

const TaskButton = (data) => {

    const [state, setState] = useState({
        statusIcon: data.status === "Completed" ? checked_icon : check_icon
    })

    const stateStatusDefinitions = useSelector(state => state.statusDefinitions)
    const status_InProgress_Id = stateStatusDefinitions.filter(x => x.name === "In Progress")[0].id
    const status_Completed_Id = stateStatusDefinitions.filter(x => x.name === "Completed")[0].id

    let deleteIcon;
    let action;
    if (data.name === "check") {
        action = async () => {
            if (data.status === "Completed") {
                await axiosInstance.patch(
                    `tasks/task-update/${data.id}`,
                    {
                        status: status_InProgress_Id
                    }
                ).then((response) => {
                    setState({statusIcon: check_icon})
                    updateTaskList()
                }).catch((error) => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    alert("It has ocurred a server error, please try again later")
                })
            }
            else {
                await axiosInstance.patch(
                    `tasks/task-update/${data.id}`,
                    {
                        status: status_Completed_Id
                    }
                ).then((response) => {
                    setState({statusIcon: checked_icon})
                    updateTaskList()
                }).catch((error) => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    alert("It has ocurred a server error, please try again later")
                })
            }
        }
    }
    else if (data.name === "delete") {
        deleteIcon = delete_icon;

        action = async () => {

            await axiosInstance.delete(`tasks/task-delete/${data.id}`)
                .then((response) => {
                    updateTaskList()
                }).catch((error) => {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    alert("It has ocurred a server error, please try again later")
                })
        }
    }
    else {
        action = null;
    }

    return (
        <button className="react-TaskButton" onMouseUp={action}>
            <img src={data.name === "check" ? state.statusIcon : deleteIcon}/>
        </button>
    );

}

export default TaskButton;